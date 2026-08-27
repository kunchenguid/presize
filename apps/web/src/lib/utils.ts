import Pica from 'pica';
import AvatarEditor from 'react-avatar-editor';

import { OutputSizingMode } from './types';

export const getImageBlobFromEditor = (editor: AvatarEditor, type: string, sizingMode: OutputSizingMode) => {
  return new Promise<Blob>((resolve, reject) => {
    const handleBlob = (blob: Blob | null) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error('Error converting image to blob'));
      }
    };

    if (sizingMode === 'fixed_size') {
      const pica = new Pica();
      pica
        .resize(editor.getImage(), editor.getImageScaledToCanvas())
        .then((result) => result.toBlob(handleBlob, type))
        .catch((error) => reject(error));
    } else {
      editor.getImage().toBlob(handleBlob, type);
    }
  });
};
