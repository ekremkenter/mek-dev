import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evrad-ı Şerif Uygulaması",
  description: "Evrad-ı Şerif Uygulaması",
};

export default function Evrad() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 lg:p-24">
      <div className="gap-16 items-center flex flex-wrap md:flex-nowrap">
        <div className="scale-75 md:transform-none">
          <div className="w-[18rem] h-[37rem] bg-gradient-to-b from-blue-100 to-blue-200 border border-blue-300 rounded-[3rem] flex items-center justify-center border-box p-[0.2rem] relative shadow-[1rem_1rem_6rem_rgba(0,0,0,0.4),0_0_0.1rem_rgba(0,0,0,0.4)]">
            <div className="w-1 h-20 rounded-[0_0.1rem_0.1rem_0] bg-gradient-to-r from-neutral-400 via-blue-300 to-blue-300 border-r border-blue-100 absolute -right-1 top-[30%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]"></div>
            <div className="w-1 h-10 rounded-[0_0.1rem_0.1rem_0] bg-gradient-to-l from-neutral-400 via-blue-300 to-blue-300 border-l border-blue-100 absolute -left-1 top-[38%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]"></div>
            <div className="w-1 h-10 rounded-[0_0.1rem_0.1rem_0] bg-gradient-to-l from-neutral-400 via-blue-300 to-blue-300 border-l border-blue-100 absolute -left-1 top-[28%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]"></div>
            <div className="w-1 h-5 rounded-[0_0.1rem_0.1rem_0] bg-gradient-to-l from-neutral-400 via-blue-300 to-blue-300 border-l border-blue-100 absolute -left-1 top-[20%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]"></div>

            <div>
              <Image
                className="h-full w-full bg-black rounded-[2.9rem] flex items-center justify-center border-box p-[0.5rem]"
                src="/assets/evrad/evrad.png"
                alt="Evrad-ı Şerif Uygulaması"
                width={300}
                height={300}
              />
              {/*<div className="h-full w-full bg-[url(https://images.unsplash.com/photo-1620207418302-439b387441b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTk4MTAxNTF8&ixlib=rb-4.0.3&q=85)] bg-cover bg-center rounded-[2.4rem] flex items-center flex-col justify-between">*/}
              {/*  <div className="w-full h-full flex flex-col items-center">*/}
              {/*    <div className="w-[5rem] h-[1.4rem] bg-black mt-[0.5rem] rounded-full"></div>*/}
              {/*  </div>*/}

              {/*  <div className="w-full flex flex-col items-center">*/}
              {/*    <div className="bg-white opacity-60 w-[5rem] h-[0.2rem] bg-black mb-8 rounded-full"></div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        <div className="-mt-28 md:mt-0">
          <h1 className="text-4xl font-bold">Evrad-ı Şerif</h1>

          <p className="mt-4">
            Mehmed Zahid Kotku Hz.’nin Evrad-ı Şerifi olan, Gümüş Ev
            Yayıncılık&apos;ın bastığı kitaptan alınan içerikle hazırlanan bu
            uygulamada, Peygamberlerin ve İslam büyüklerinin virdlerini, birçok
            duayı ve tesbihatı bulabileceksiniz. Numan b. Beşir (r.a.),
            Resûlüllah (aleyhi’s-salâtü vesselâm)’ın şöyle buyurduğunu
            söylemiştir. “Dua ibadettir. Allah-u Teâlâ: ‘Dua edin kabul edeyim’,
            buyurmuştur.”
          </p>
          <div className="mt-6 flex gap-6">
            <Link
              href="https://itunes.apple.com/app/id1445156190?mt=8"
              target="_blank"
              aria-label="Download on the App Store"
            >
              <div className="flex mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center">
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width="30">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-2xl font-semibold font-sans -mt-1">
                    App Store
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=tr.com.navek.evrad"
              target="_blank"
              aria-label="Get it on Google Play"
            >
              <div className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    />
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    />
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    />
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-semibold font-sans -mt-1">
                    Google Play
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-6">
            <Link href="/projects/evrad/privacy" className="text-xs">
              Gizlilik Politikası
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
