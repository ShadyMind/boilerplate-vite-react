type FilesizeUnits = 'B' | 'KB' | 'MB' | 'GB' | 'TB';

const UNITS = ['B', 'KB', 'MB', 'GB', 'TB'] as const;

const UNITS_SIZE_MAP = UNITS.reduce((acc, unit, idx) => {
  acc[unit] = 1024 ** idx;
  return acc;
}, {} as Record<FilesizeUnits, number>);

const isFilesizeUnit = (unit: string): unit is FilesizeUnits =>
  UNITS.includes(unit as FilesizeUnits);

export const filesizeBytes = (filesize: `${number}${FilesizeUnits}`): number => {
  let idx = -2;

  if (Number.isFinite(filesize.at(filesize.length - 2))) {
    idx = -1;
  }

  const unit = filesize.slice(idx);

  const size = Number.parseFloat(filesize.slice(0, idx));
  if (isFilesizeUnit(unit)) {
    return size * UNITS_SIZE_MAP[unit];
  } 

  return size;
};

export const humanBytes = (bytes: number) => {
  if (!bytes) {
    return `0${UNITS[0]}`;
  }

  const unitIdx = Math.floor(Math.log(bytes) / Math.log(1024));
  const unit = UNITS[unitIdx];
  return Math.round(
    bytes / Math.pow(1024, unitIdx)
  ) + ' ' + unit;
};
