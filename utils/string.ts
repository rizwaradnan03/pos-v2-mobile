export const stringArrayBufferToBase64 = ({
  buffer,
}: {
  buffer: ArrayBuffer;
}) => {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;

  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  const mod = btoa(binary)
  return mod;
};
