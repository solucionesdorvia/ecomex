# General Sans (Fontshare)

## Deployment note (Railway)

Railway builds will fail if `next/font/local` points at missing files.
This repo currently loads General Sans from Fontshare via a `<link>` in `app/layout.tsx`,
so you can deploy without committing font binaries.

## Optional local font files

If you prefer local fonts later, these are the expected filenames:

- `GeneralSans-Variable.woff2` (normal)
- `GeneralSans-VariableItalic.woff2` (italic)

Download General Sans from Fontshare and place the files in this folder.

