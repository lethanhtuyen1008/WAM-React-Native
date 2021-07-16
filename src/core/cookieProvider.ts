function set(key: string, value: string, timeoutInMinutes: number = 60): void {
  const time = Date.now() + timeoutInMinutes * 60 * 1000;
  const expirationTime = new Date(time);

  document.cookie = `${key}=${value};expires=${expirationTime.toUTCString()};path=/`;
}

function get(key: string, defaultValue: string = ''): string {
  const match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'));
  if (match) {
    return match[2];
  }

  return defaultValue;
}

function has(key: string): boolean {
  return !!get(key);
}

function remove(...keys: string[]): void {
  for (const key of keys) {
    set(key, '', -1000);
  }
}

function updateExpirationTime(key: string, value: string, timeoutInMinutes: number = 60): void {
  set(key, value, timeoutInMinutes);
}

export const cookieProvider = {
  set,
  get,
  remove,
  has,
  updateExpirationTime,
};
