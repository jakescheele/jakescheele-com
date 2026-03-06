import { useState } from "react";
import profilePic from "./assets/profile-pic.jpg";

// ── Bass Space SVG Logo (inlined, scaled via viewBox) ────────────────────────
const BassSpaceLogo = ({ size = 22 }) => (
  <svg
    viewBox="0 0 416 417"
    width={size} height={size}
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <path d="M0 0 C1.05338562 -0.00101212 1.05338562 -0.00101212 2.12805176 -0.00204468 C52.7112302 0.07463125 102.27525295 18.78145321 139.55078125 53.17578125 C141.59574667 55.05121586 143.68869475 56.84032533 145.8125 58.625 C179.10310678 87.86225945 200.08673653 133.08422277 206.8125 176.25 C207.14701172 178.18939453 207.14701172 178.18939453 207.48828125 180.16796875 C215.19021657 232.40490419 201.04281968 287.26794277 170.8125 330.25 C167.96392023 334.06557257 164.94384375 337.66529672 161.8125 341.25 C160.91125639 342.34143894 160.01298377 343.43533575 159.1171875 344.53125 C126.37479658 384.24943505 77.710465 409.79672771 26.8125 416.25 C26.08571045 416.3442627 25.3589209 416.43852539 24.61010742 416.53564453 C16.96490588 417.41836015 9.31383693 417.49331819 1.625 417.5 C0.92274292 417.50067474 0.22048584 417.50134949 -0.50305176 417.50204468 C-51.0862302 417.42536875 -100.65025295 398.71854679 -137.92578125 364.32421875 C-139.97074667 362.44878414 -142.06369475 360.65967467 -144.1875 358.875 C-177.47810678 329.63774055 -198.46173653 284.41577723 -205.1875 241.25 C-205.41050781 239.95707031 -205.63351563 238.66414062 -205.86328125 237.33203125 C-213.56521657 185.09509581 -199.41781968 130.23205723 -169.1875 87.25 C-166.33892023 83.43442743 -163.31884375 79.83470328 -160.1875 76.25 C-159.28625639 75.15856106 -158.38798377 74.06466425 -157.4921875 72.96875 C-124.74979658 33.25056495 -76.085465 7.70327229 -25.1875 1.25 C-24.46071045 1.1557373 -23.7339209 1.06147461 -22.98510742 0.96435547 C-15.33990588 0.08163985 -7.68883693 0.00668181 0 0 Z" fill="#191633" transform="translate(207.1875,-0.25)"/>
    <path d="M0 0 C1.05338562 -0.00101212 1.05338562 -0.00101212 2.12805176 -0.00204468 C52.7112302 0.07463125 102.27525295 18.78145321 139.55078125 53.17578125 C141.59574667 55.05121586 143.68869475 56.84032533 145.8125 58.625 C179.10310678 87.86225945 200.08673653 133.08422277 206.8125 176.25 C207.14701172 178.18939453 207.14701172 178.18939453 207.48828125 180.16796875 C215.19021657 232.40490419 201.04281968 287.26794277 170.8125 330.25 C167.96392023 334.06557257 164.94384375 337.66529672 161.8125 341.25 C160.91125639 342.34143894 160.01298377 343.43533575 159.1171875 344.53125 C126.37479658 384.24943505 77.710465 409.79672771 26.8125 416.25 C26.08571045 416.3442627 25.3589209 416.43852539 24.61010742 416.53564453 C16.96490588 417.41836015 9.31383693 417.49331819 1.625 417.5 C0.92274292 417.50067474 0.22048584 417.50134949 -0.50305176 417.50204468 C-51.0862302 417.42536875 -100.65025295 398.71854679 -137.92578125 364.32421875 C-139.97074667 362.44878414 -142.06369475 360.65967467 -144.1875 358.875 C-177.47810678 329.63774055 -198.46173653 284.41577723 -205.1875 241.25 C-205.41050781 239.95707031 -205.63351563 238.66414062 -205.86328125 237.33203125 C-213.56521657 185.09509581 -199.41781968 130.23205723 -169.1875 87.25 C-166.33892023 83.43442743 -163.31884375 79.83470328 -160.1875 76.25 C-159.28625639 75.15856106 -158.38798377 74.06466425 -157.4921875 72.96875 C-124.74979658 33.25056495 -76.085465 7.70327229 -25.1875 1.25 C-24.46071045 1.1557373 -23.7339209 1.06147461 -22.98510742 0.96435547 C-15.33990588 0.08163985 -7.68883693 0.00668181 0 0 Z M-141.25 82.5 C-172.22019813 117.57951244 -189.96310651 161.68637 -189.625 208.5625 C-189.62195862 209.46141968 -189.61891724 210.36033936 -189.61578369 211.28649902 C-189.54888155 224.67227881 -188.80348161 237.30087666 -185.1875 250.25 C-184.72318364 252.04407052 -184.2596742 253.83835002 -183.796875 255.6328125 C-172.4346346 298.43956916 -147.17024374 336.23277413 -111.1875 362.25 C-110.60419922 362.6723291 -110.02089844 363.0946582 -109.41992188 363.52978516 C-85.98504365 380.26990262 -59.50643732 391.15044291 -31.1875 396.25 C-30.13731689 396.44480957 -30.13731689 396.44480957 -29.06591797 396.64355469 C-9.16291621 400.15498124 12.94075917 399.78051233 32.8125 396.25 C33.51133301 396.12641113 34.21016602 396.00282227 34.93017578 395.87548828 C73.18872244 388.86609432 106.89275009 369.89705475 134.8125 343.25 C135.61429687 342.48945313 136.41609375 341.72890625 137.2421875 340.9453125 C151.18378139 327.38964509 161.787351 311.36357225 170.8125 294.25 C171.15667969 293.60643555 171.50085938 292.96287109 171.85546875 292.29980469 C193.30929341 251.63206618 197.33182803 199.8224749 184.10595703 155.90380859 C172.44599311 118.64147702 150.40660529 85.57351191 119.8125 61.25 C118.84570312 60.45464844 117.87890625 59.65929688 116.8828125 58.83984375 C107.80771327 51.55436332 98.0474036 45.76332595 87.8125 40.25 C87.19213867 39.91371582 86.57177734 39.57743164 85.93261719 39.23095703 C66.10640897 28.6993382 43.96423971 22.9947679 21.8125 20.25 C21.05888184 20.14977539 20.30526367 20.04955078 19.52880859 19.94628906 C-40.76414637 12.42806393 -100.42738236 39.00796079 -141.25 82.5 Z" fill="#C7C8D0" transform="translate(207.1875,-0.25)"/>
    <path d="M0 0 C1.84710362 0.95053198 3.3301902 2.00303522 4.92578125 3.33203125 C5.47363281 3.78320312 6.02148438 4.234375 6.5859375 4.69921875 C25.36232318 21.89308445 35.98565821 50.15657479 38.80078125 74.76953125 C39.55999594 80.17968317 40.46976682 83.9203952 44.92578125 87.33203125 C46.73432514 88.6084883 48.5472554 89.87874149 50.36328125 91.14453125 C56.53920929 95.48685042 61.4736613 100.71842562 62.92578125 108.33203125 C63.05564965 110.97597282 63.13738521 113.59331947 63.1640625 116.23828125 C63.17213425 116.99999634 63.18020599 117.76171143 63.18852234 118.54650879 C63.20232037 120.15354156 63.21306157 121.76060312 63.22094727 123.36767578 C63.23250387 125.01066677 63.25301351 126.65361917 63.2824707 128.29638672 C63.3250737 130.67311042 63.34130139 133.04872356 63.3515625 135.42578125 C63.36907059 136.15817017 63.38657867 136.89055908 63.40461731 137.6451416 C63.38994337 141.09354323 63.17722326 142.99282301 61.09814453 145.79760742 C57.85796998 148.08626746 55.83626597 147.80032881 51.92578125 147.33203125 C48.81456853 146.43091566 45.85357566 145.25904445 42.86328125 144.01953125 C42.08662109 143.71080078 41.30996094 143.40207031 40.50976562 143.08398438 C36.20906051 141.35423422 32.0420407 139.47248616 27.92578125 137.33203125 C27.81621094 138.10546875 27.70664063 138.87890625 27.59375 139.67578125 C26.64558035 145.90440792 25.67002586 151.63244629 22.92578125 157.33203125 C19.82774739 159.42679058 17.18647829 159.59729901 13.50219727 159.63842773 C12.41749649 159.65441513 11.33279572 159.67040253 10.21522522 159.68687439 C8.46513405 159.69491844 8.46513405 159.69491844 6.6796875 159.703125 C5.47642319 159.71215347 4.27315887 159.72118195 3.03343201 159.73048401 C0.48902883 159.74498964 -2.05541167 159.75387401 -4.59985352 159.75756836 C-8.49363879 159.76947596 -12.3858455 159.81867224 -16.27929688 159.86914062 C-18.75129434 159.87860344 -21.22330155 159.88583915 -23.6953125 159.890625 C-24.86001572 159.91015732 -26.02471893 159.92968964 -27.22471619 159.94981384 C-35.26683344 159.90488332 -35.26683344 159.90488332 -39.27636719 157.06005859 C-40.91995053 154.56611504 -41.79623099 153.03815736 -42.21875 150.125 C-42.39760742 148.99868164 -42.39760742 148.99868164 -42.58007812 147.84960938 C-42.68126953 147.08068359 -42.78246094 146.31175781 -42.88671875 145.51953125 C-43.06750977 144.33713867 -43.06750977 144.33713867 -43.25195312 143.13085938 C-43.54441497 141.20061118 -43.81186792 139.26660202 -44.07421875 137.33203125 C-44.75935547 137.63496094 -45.44449219 137.93789063 -46.15039062 138.25 C-49.28524887 139.62586621 -52.42942472 140.97903847 -55.57421875 142.33203125 C-57.19070312 143.04746094 -57.19070312 143.04746094 -58.83984375 143.77734375 C-64.80850809 146.32494438 -69.56094547 148.28810806 -76.07421875 147.33203125 C-77.75561523 146.31665039 -77.75561523 146.31665039 -79.07421875 144.33203125 C-79.4096474 141.50710186 -79.56608341 138.90720931 -79.578125 136.078125 C-79.5931028 134.85489281 -79.5931028 134.85489281 -79.60838318 133.60694885 C-79.62357488 131.87791003 -79.63060864 130.14878323 -79.63012695 128.41967773 C-79.63663713 125.80234627 -79.69095361 123.18891671 -79.74804688 120.57226562 C-79.8442987 111.16773092 -79.66292607 103.70820137 -73.07421875 96.33203125 C-70.73046875 93.96484375 -70.73046875 93.96484375 -68.57421875 92.45703125 C-67.42759766 91.63138672 -67.42759766 91.63138672 -66.2578125 90.7890625 C-64.39870114 89.54854633 -62.5247828 88.34015127 -60.63671875 87.14453125 C-57.42428059 84.87231889 -56.44268102 82.94756884 -55.57519531 79.14404297 C-55.4562793 78.35787598 -55.33736328 77.57170898 -55.21484375 76.76171875 C-55.07208008 75.87436035 -54.92931641 74.98700195 -54.78222656 74.07275391 C-54.63108398 73.12706543 -54.47994141 72.18137695 -54.32421875 71.20703125 C-50.03772068 46.36575432 -39.50928183 17.78113579 -18.88671875 1.83203125 C-13.06635368 -1.80942792 -6.50264503 -2.09407213 0 0 Z" fill="#9C9CAA" transform="translate(216.07421875,171.66796875)"/>
    <path d="M0 0 C4.66912085 3.87045544 9.22636706 8.02708919 13.1875 12.625 C13.1875 13.285 13.1875 13.945 13.1875 14.625 C14.01660889 14.60405273 14.84571777 14.58310547 15.69995117 14.56152344 C43.69791977 13.94971526 43.69791977 13.94971526 56.0625 16.375 C56.8671167 16.53194336 57.6717334 16.68888672 58.50073242 16.85058594 C66.06361051 18.52071818 74.57188941 21.07381077 79.1875 27.625 C79.84568425 32.23228973 79.70447902 34.47354673 77.8125 38.6875 C55.78077358 63.34205099 8.08845011 69.41353514 -22.8125 74.625 C-23.44346588 74.73302948 -24.07443176 74.84105896 -24.72451782 74.95236206 C-38.38587476 77.2734174 -52.08836187 78.93498238 -65.875 80.3125 C-67.52302612 80.47733887 -67.52302612 80.47733887 -69.2043457 80.64550781 C-84.74569119 82.1661128 -100.19528306 83.11723626 -115.8125 83.125 C-116.64725861 83.12921967 -117.48201721 83.13343933 -118.34207153 83.13778687 C-155.6382605 83.22170062 -155.6382605 83.22170062 -168.0546875 72.73046875 C-170.48050097 69.82488328 -170.91263446 67.70732443 -171.15625 63.9921875 C-170.47125773 59.27508163 -167.2749959 56.64072224 -163.8125 53.625 C-162.82636719 52.74714844 -162.82636719 52.74714844 -161.8203125 51.8515625 C-152.43308838 44.46872787 -139.73417362 39.78490167 -128.12890625 37.34765625 C-117.69668894 35.5681211 -117.69668894 35.5681211 -109.99609375 29.046875 C-108.2209457 25.66086203 -106.90251674 22.12574972 -105.59863281 18.53710938 C-100.2126491 5.43679123 -85.94438445 -3.37830369 -73.8125 -9.375 C-70.51580621 -10.69838708 -67.27997875 -11.62144661 -63.8125 -12.375 C-63.02359375 -12.57738281 -62.2346875 -12.77976563 -61.421875 -12.98828125 C-39.869451 -17.84749341 -17.70763356 -13.22701917 0 0 Z" fill="#C9CAD1" transform="translate(249.8125,51.375)"/>
  </svg>
);

// ── Other Icons ──────────────────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const AppleMusicIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
    <path d="M17.05 2H6.95C4.22 2 2 4.22 2 6.95v10.1C2 19.78 4.22 22 6.95 22h10.1C19.78 22 22 19.78 22 17.05V6.95C22 4.22 19.78 2 17.05 2zm-1.3 13.4a2.15 2.15 0 01-2.15 2.15 2.15 2.15 0 01-2.15-2.15 2.15 2.15 0 012.15-2.15c.34 0 .66.08.95.22V8.5l-5.3 1.24v5.67a2.15 2.15 0 01-2.15 2.14 2.15 2.15 0 01-2.15-2.14 2.15 2.15 0 012.15-2.15c.34 0 .66.08.95.22V9.03a.7.7 0 01.54-.68l5.96-1.4a.7.7 0 01.85.68v7.77z"/>
  </svg>
);

const SoundCloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
    <path d="M11.56 8.87V17h8.76c.84-.01 1.68-.65 1.68-1.57 0-.79-.61-1.46-1.39-1.56-.09-2.34-1.99-4.22-4.35-4.22-.87 0-1.67.25-2.35.68-.15-.32-.48-.54-.84-.54-.53 0-.95.42-.95.95v.13H11.56zm-1.9 8.13H8.5V9.88c0-.53.42-.95.95-.95.52 0 .94.42.94.95l.27 7.12zm-2.54 0H5.95V11.4c0-.53.42-.95.95-.95s.94.42.94.95l.28 5.6zm-2.54 0H3.41v-3.64c0-.53.43-.95.95-.95.53 0 .95.42.95.95l.31 3.64zm-2.54 0H.87v-2.32c0-.53.43-.95.95-.95.53 0 .95.42.95.95l.27 2.32z"/>
  </svg>
);

// Generic developer / code icon
const DevIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
    <line x1="14" y1="4" x2="10" y2="20"/>
  </svg>
);

const socialLinks = [
  { label: "Facebook",    handle: "/jscheele",       url: "https://www.facebook.com/jscheele/",             bg: "#1877F2",   icon: <FacebookIcon /> },
  { label: "Instagram",   handle: "@wobblemaster710", url: "https://www.instagram.com/wobblemaster710/",     bg: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", icon: <InstagramIcon /> },
  { label: "LinkedIn",    handle: "/jakescheele",     url: "https://www.linkedin.com/in/jakescheele/",       bg: "#0A66C2",   icon: <LinkedInIcon /> },
  { label: "Apple Music", handle: "jscheele",         url: "https://music.apple.com/profile/jscheele",      bg: "linear-gradient(135deg,#fc3c44,#f2295b)", icon: <AppleMusicIcon /> },
  { label: "SoundCloud",  handle: "jscheele",         url: "https://soundcloud.com/jscheele",               bg: "#FF5500",   icon: <SoundCloudIcon /> },
  { label: "Bass Space",  handle: "wobblemaster710",  url: "https://bassspace.app/profile/wobblemaster710",  bg: "#191633",   icon: <BassSpaceLogo size={28} /> },
];

const positions = [
  {
    icon: <BassSpaceLogo size={32} />,
    title: "Founder",
    company: "Bass Space",
    companyUrl: "https://bassspace.app",
    period: "2026 – Present",
    description: "Built a community platform for bass music lovers — connecting artists, gear heads, and fans of the low end.",
  },
  {
    icon: <DevIcon />,
    iconBg: "linear-gradient(135deg,#6c47ff,#a78bfa)",
    title: "Consultant & Product Designer",
    company: null,
    period: "2019 – Present",
    description: (
      <>
        Built several ERD platforms under{" "}
        <a href="https://edimate.com/" target="_blank" rel="noopener noreferrer" className="work-link">Edimate Custom Software</a>.
        Continues to provide consulting &amp; coaching in FileMaker systems &amp; development with{" "}
        <a href="https://rcconsulting.com/" target="_blank" rel="noopener noreferrer" className="work-link">RCC</a>.
      </>
    ),
  },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0d0a14;
    --surface: #161122;
    --border: rgba(180,120,255,0.1);
    --text: #ede9f5;
    --muted: #7a6e94;
    --sunset1: #f97b4a;
    --sunset2: #f7a157;
    --sunset3: #f0c87a;
    --purple: #b97eff;
  }

  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; min-height: 100vh; overflow-x: hidden; }

  .orb-wrap { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
  .orb { position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.15; }
  .orb-1 { width: 560px; height: 560px; background: radial-gradient(circle, #f97b4a, transparent); top: -150px; right: -100px; animation: drift1 18s ease-in-out infinite alternate; }
  .orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, #b97eff, transparent); bottom: 40px; left: -90px; animation: drift2 22s ease-in-out infinite alternate; }
  .orb-3 { width: 260px; height: 260px; background: radial-gradient(circle, #f7a157, transparent); top: 48%; left: 50%; animation: drift3 15s ease-in-out infinite alternate; }
  @keyframes drift1 { from { transform: translate(0,0); } to { transform: translate(-40px,60px); } }
  @keyframes drift2 { from { transform: translate(0,0); } to { transform: translate(50px,-40px); } }
  @keyframes drift3 { from { transform: translate(-50%,-50%) scale(1); } to { transform: translate(-50%,-55%) scale(1.2); } }

  .site { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; padding: 72px 28px 120px; }

  /* Header */
  .header { margin-bottom: 80px; }

  .header-row {
    display: flex; align-items: center; gap: 24px; margin-bottom: 20px;
    opacity: 0; animation: riseIn 0.7s 0.05s ease forwards;
  }

  .photo {
    width: 90px; height: 90px; border-radius: 50%; flex-shrink: 0;
    object-fit: cover; border: 2px solid rgba(180,120,255,0.25);
    display: block;
  }

  h1 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(40px, 9vw, 68px);
    font-weight: 800; line-height: 0.93; letter-spacing: -0.03em;
    opacity: 0; animation: riseIn 0.7s 0.12s ease forwards;
    margin-bottom: 18px;
  }
  h1 .first { color: var(--text); display: block; }
  h1 .last {
    display: block;
    background: linear-gradient(100deg, var(--sunset1) 0%, var(--sunset2) 55%, var(--sunset3) 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  .bio {
    font-size: 15px; line-height: 1.8; color: var(--muted); max-width: 460px; font-weight: 300;
    opacity: 0; animation: riseIn 0.7s 0.22s ease forwards;
  }
  .bio strong { color: var(--text); font-weight: 500; }

  /* Sections */
  .section { margin-bottom: 62px; opacity: 0; animation: riseIn 0.7s ease forwards; }
  .s1 { animation-delay: 0.32s; } .s2 { animation-delay: 0.44s; } .s3 { animation-delay: 0.56s; }

  .sec-label {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 11px; font-weight: 600; color: var(--purple);
    margin-bottom: 20px; letter-spacing: 0.12em; text-transform: uppercase;
  }

  /* Work cards */
  .work-cards { display: flex; flex-direction: column; gap: 10px; }
  .work-card { padding: 22px 20px; border-radius: 14px; background: var(--surface); border: 1px solid var(--border); transition: border-color 0.22s; }
  .work-card:hover { border-color: rgba(249,123,74,0.28); }
  .work-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 10px; }
  .work-left { display: flex; align-items: center; gap: 13px; }

  .work-icon-wrap {
    width: 42px; height: 42px; border-radius: 10px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    background: var(--icon-bg, #191633);
    overflow: hidden;
  }

  .work-title { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 18px; font-weight: 700; color: var(--text); letter-spacing: -0.02em; }
  .work-company { font-size: 12px; color: var(--sunset1); margin-top: 3px; font-weight: 500; }
  .work-period { font-size: 12px; color: var(--muted); white-space: nowrap; padding-top: 4px; font-weight: 300; }
  .work-desc { font-size: 14px; color: var(--muted); line-height: 1.78; font-weight: 300; }
  .work-link { color: var(--sunset2); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(247,161,87,0.3); transition: border-color 0.2s, color 0.2s; }
  .work-link:hover { color: var(--sunset3); border-bottom-color: var(--sunset3); }

  /* Social links */
  .links { display: flex; flex-direction: column; gap: 8px; }
  .link-item {
    display: flex; align-items: center; gap: 14px;
    padding: 13px 16px; border-radius: 12px;
    text-decoration: none; color: #fff;
    transition: transform 0.18s, opacity 0.18s;
  }
  .link-item:hover { transform: translateX(5px) scale(1.01); opacity: 0.9; }

  .link-icon-wrap {
    width: 40px; height: 40px; border-radius: 10px;
    background: rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  .link-text { flex: 1; }
  .link-name { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 700; letter-spacing: -0.01em; }
  .link-handle { font-size: 12px; opacity: 0.68; margin-top: 2px; font-weight: 300; }
  .link-arrow { opacity: 0.55; font-size: 15px; transition: transform 0.18s, opacity 0.18s; }
  .link-item:hover .link-arrow { transform: translateX(3px); opacity: 1; }

  /* Contact */
  .form { display: flex; flex-direction: column; gap: 14px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  @media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }

  .field { display: flex; flex-direction: column; gap: 8px; }
  .field label { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; font-weight: 600; color: var(--muted); letter-spacing: 0.12em; text-transform: uppercase; }
  .field input, .field textarea {
    background: var(--surface); border: 1px solid var(--border); border-radius: 10px;
    padding: 13px 16px; color: var(--text); font-family: 'Inter', sans-serif;
    font-size: 15px; font-weight: 300; outline: none; resize: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .field input::placeholder, .field textarea::placeholder { color: var(--muted); opacity: 0.4; }
  .field input:focus, .field textarea:focus { border-color: rgba(249,123,74,0.5); box-shadow: 0 0 0 3px rgba(249,123,74,0.09); }

  .send-btn {
    align-self: flex-start; padding: 13px 32px;
    background: linear-gradient(135deg, var(--sunset1), var(--sunset2));
    color: #0d0a14; border: none; border-radius: 10px;
    font-family: 'Plus Jakarta Sans', sans-serif; font-size: 15px; font-weight: 700; letter-spacing: -0.01em;
    cursor: pointer; transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(249,123,74,0.28);
  }
  .send-btn:hover { opacity: 0.88; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(249,123,74,0.4); }
  .send-btn:active { transform: translateY(0); }
  .send-btn:disabled { opacity: 0.3; cursor: not-allowed; transform: none; box-shadow: none; }

  .success { padding: 18px 22px; background: rgba(249,123,74,0.08); border: 1px solid rgba(249,123,74,0.2); border-radius: 12px; color: var(--sunset2); font-size: 15px; line-height: 1.7; }

  .footer { margin-top: 80px; padding-top: 26px; border-top: 1px solid var(--border); font-size: 12px; color: var(--muted); opacity: 0.5; font-weight: 300; }

  @keyframes riseIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
`;

export default function JakeScheele() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  function change(e) { setForm((f) => ({ ...f, [e.target.name]: e.target.value })); }
  async function submit() {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <style>{css}</style>
      <div className="orb-wrap">
        <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
      </div>

      <div className="site">
        <header className="header">
          <div className="header-row">
            <img src={profilePic} alt="Jake Scheele" className="photo" />
            <h1>
              <span className="first">Jake</span>
              <span className="last">Scheele</span>
            </h1>
          </div>

          <p className="bio">
            Founder of <strong>Bass Space</strong> · <strong>FileMaker Developer</strong> · <strong>Wobble Master</strong> · lover of music, people, and technology
          </p>
        </header>

        <section className="section s1">
          <p className="sec-label">What I Do</p>
          <div className="work-cards">
            {positions.map((p, i) => (
              <div key={i} className="work-card">
                <div className="work-top">
                  <div className="work-left">
                    <div
                      className="work-icon-wrap"
                      style={{ background: p.iconBg || "#191633" }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <div className="work-title">{p.title}</div>
                      {p.company && (
                        <div className="work-company">
                          {p.companyUrl
                            ? <a href={p.companyUrl} target="_blank" rel="noopener noreferrer" className="work-link">{p.company}</a>
                            : p.company}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="work-period">{p.period}</div>
                </div>
                <p className="work-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section s2">
          <p className="sec-label">Find Me</p>
          <div className="links">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.url} className="link-item" style={{ background: s.bg }} target="_blank" rel="noopener noreferrer">
                <div className="link-icon-wrap">{s.icon}</div>
                <div className="link-text">
                  <div className="link-name">{s.label}</div>
                  <div className="link-handle">{s.handle}</div>
                </div>
                <span className="link-arrow">→</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section s3">
          <p className="sec-label">Say Hello</p>
          {sent ? (
            <div className="success">Got it — thanks for reaching out! I'll get back to you soon. 🤙</div>
          ) : (
            <div className="form">
              <div className="form-row">
                <div className="field">
                  <label>Your Name</label>
                  <input name="name" placeholder="Your name" value={form.name} onChange={change} />
                </div>
                <div className="field">
                  <label>Your Email</label>
                  <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={change} />
                </div>
              </div>
              <div className="field">
                <label>Your Message</label>
                <textarea name="message" rows={5} placeholder="What's on your mind?" value={form.message} onChange={change} />
              </div>
              <button className="send-btn" onClick={submit} disabled={sending}>
                {sending ? "Sending…" : "Send it →"}
              </button>
            </div>
          )}
        </section>

        <footer className="footer">© {new Date().getFullYear()} Jake Scheele · jakescheele.com</footer>
      </div>
    </>
  );
}
