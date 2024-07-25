"use client";

const value = "060223112312000001367324";

const tag = `CT~~CD,~CC^~CT~
^XA~TA000~JSN^LT0^MNW^MTT^PON^PMN^LH0,0^JMA^PR3,6~SD30^JUS^LRN^CI0^XZ
^XA
^MMT
^PW480
^LL0511
^LS0
^RFW,H
^FD${value}
^FS

^BY2,3,65^FT98,155^BCN,,N,N
^FDM1^FS
^FT62,385^A0N,34,33^FH\\^FDA-B-C^FS
^FT61,338^A0N,24,24^FH\\^FDline2^FS
^FT61,292^A0N,24,24^FH\\^FDline1^FS
^FT84,207^A0N,31,31^FH\\^FD112233^FS
^PQ1,0,1,Y^XZ
`;

async function getDevices() {
  const devices = await navigator.usb.getDevices();
  print(devices);
  devices.forEach((device) => {
    console.log(`Name: ${device.productName}, Serial: ${device.serialNumber}`);
  });
  return devices;
}

async function requestDevice() {
  try {
    const device = await navigator.usb.requestDevice({ filters: [] });
    console.log(device);

    await device.open();
    await device.selectConfiguration(1);
    await device.claimInterface(0);
    await device.transferOut(2, new Uint8Array(new TextEncoder().encode(tag)));
    await device.close();
  } catch (e) {
    console.error(e);
  }
}
export default function Projects() {
  return (
    <div className="py-24 sm:py-32">
      <button
        onClick={() => {
          requestDevice();
        }}
      >
        Request device
      </button>

      <button
        onClick={async () => {
          const devices = await getDevices();
          console.log(devices);
        }}
      >
        prints
      </button>
    </div>
  );
}
