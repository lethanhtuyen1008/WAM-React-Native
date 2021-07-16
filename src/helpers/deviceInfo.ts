export const osMapping = [
  { value: 'Windows 3.11', label: /Win16/ },
  { value: 'Windows 95', label: /(Windows 95|Win95|Windows_95)/ },
  { value: 'Windows ME', label: /(Win 9x 4.90|Windows ME)/ },
  { value: 'Windows 98', label: /(Windows 98|Win98)/ },
  { value: 'Windows CE', label: /Windows CE/ },
  { value: 'Windows 2000', label: /(Windows NT 5.0|Windows 2000)/ },
  { value: 'Windows XP', label: /(Windows NT 5.1|Windows XP)/ },
  { value: 'Windows Server 2003', label: /Windows NT 5.2/ },
  { value: 'Windows Vista', label: /Windows NT 6.0/ },
  { value: 'Windows 7', label: /(Windows 7|Windows NT 6.1)/ },
  { value: 'Windows 8.1', label: /(Windows 8.1|Windows NT 6.3)/ },
  { value: 'Windows NT 10.0', label: /(Windows NT 10.0|WinNT10.0|WinNT|Windows NT)/ },
  { value: 'Windows 8', label: /(Windows 8|Windows NT 6.2)/ },
  { value: 'Windows NT 4.0', label: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
  { value: 'Windows ME', label: /Windows ME/ },
  { value: 'Android', label: /Android/ },
  { value: 'Open BSD', label: /OpenBSD/ },
  { value: 'Sun OS', label: /SunOS/ },
  { value: 'Linux', label: /(Linux|X11)/ },
  { value: 'iOS', label: /(iPhone|iPad|iPod)/ },
  { value: 'Mac OS X', label: /Mac OS X/ },
  { value: 'Mac OS', label: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
  { value: 'QNX', label: /QNX/ },
  { value: 'UNIX', label: /UNIX/ },
  { value: 'BeOS', label: /BeOS/ },
  { value: 'OS/2', label: /OS\/2/ },
  {
    value: 'Search Bot',
    label: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
  },
];

export const getDeviceInfo = () => {
  return `Browser:${getBrowserName()}, OS: ${getOSName()}`;
};

export const getBrowserName = (): string => {
  const [browserName = 'Unknown', version = 'Unknown'] =
    navigator?.userAgent?.match(
      /(firefox|msie|trident|chrome|safari|opera|edg|ucbrowser|googlebot|fxios|crios|opr|opera)\/?\s*(\.?\d+(\.\d+)*)/i
    ) || [];

  return [browserName, version].join(' ');
};

export const getOSName = () => {
  return osMapping.find((it) => it.label.test(navigator?.userAgent))?.value || 'Unknown';
};
