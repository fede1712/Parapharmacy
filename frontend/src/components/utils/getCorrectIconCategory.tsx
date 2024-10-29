import { CategoriesSlug } from "../types/categories.type";

const icons: { [key in CategoriesSlug]: JSX.Element } = {
  dermocosmetica: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-vaccine-bottle hover:text-green-400"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 3m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
      <path d="M10 6v.98c0 .877 -.634 1.626 -1.5 1.77c-.866 .144 -1.5 .893 -1.5 1.77v8.48a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-8.48c0 -.877 -.634 -1.626 -1.5 -1.77a1.795 1.795 0 0 1 -1.5 -1.77v-.98" />
      <path d="M7 12h10" />
      <path d="M7 18h10" />
      <path d="M11 15h2" />
    </svg>
  ),
  cosmetica: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-perfume"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 6v3" />
      <path d="M14 6v3" />
      <path d="M5 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
      <path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M9 3h6v3h-6z" />
    </svg>
  ),
  higiene: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-hand-sanitizer"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 21h10v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10z" />
      <path d="M15 3h-6a2 2 0 0 0 -2 2" />
      <path d="M12 3v5" />
      <path d="M12 11v4" />
      <path d="M10 13h4" />
    </svg>
  ),
  dietetica: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-apple"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 11.319c0 3.102 .444 5.319 2.222 7.978c1.351 1.797 3.156 2.247 5.08 .988c.426 -.268 .97 -.268 1.397 0c1.923 1.26 3.728 .809 5.079 -.988c1.778 -2.66 2.222 -4.876 2.222 -7.977c0 -2.661 -1.99 -5.32 -4.444 -5.32c-1.267 0 -2.41 .693 -3.22 1.44a.5 .5 0 0 1 -.672 0c-.809 -.746 -1.953 -1.44 -3.22 -1.44c-2.454 0 -4.444 2.66 -4.444 5.319" />
      <path d="M7 12c0 -1.47 .454 -2.34 1.5 -3" />
      <path d="M12 7c0 -1.2 .867 -4 3 -4" />
    </svg>
  ),
  optica: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-eyeglass"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 4h-2l-3 10" />
      <path d="M16 4h2l3 10" />
      <path d="M10 16l4 0" />
      <path d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
      <path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
    </svg>
  ),
  herbolario: (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="black" stroke="black">
      <path d="M360.92-154h236.62q10 0 16.92-5.77 6.92-5.77 10-14.23l47.16-177.85H285.85L334-174q3.08 8.46 10 14.23t16.92 5.77Zm-2 66q-32.47 0-57.21-18.94-24.75-18.94-33.25-49.29l-51.84-195.62h524.23L690-156.23q-8.66 29.58-33.87 48.91Q630.92-88 599.54-88H358.92ZM220.69-417.85h518.62q12.31 0 20-7.69 7.69-7.69 7.69-19.23v-38.46H193v38.46q0 11.54 8.08 19.23 8.07 7.69 19.61 7.69Zm258.54-222.53q0-92.79 72.13-157.98 72.13-65.18 169.02-72.87-8.46 85.52-67.07 148.95-58.62 63.43-142.08 79.2v93.85H832v104.46q0 38.34-26.54 65.63-26.54 27.29-60.15 27.29H214.69q-34.61 0-60.65-27.29T128-444.77v-104.46h318.23v-93.85q-82.46-15.77-141.08-78.81-58.61-63.05-67.07-149.34 96.12 7.69 168.63 73.26 72.52 65.57 72.52 157.59Z" />
    </svg>
  ),
  "nutricion-deportiva": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-ball-football"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" />
      <path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45" />
    </svg>
  ),
  salud: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-stethoscope"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
      <path d="M8 15a6 6 0 1 0 12 0v-3" />
      <path d="M11 3v2" />
      <path d="M6 3v2" />
      <path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  ),
  cabello: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
      fill="black"
      stroke="currentColor"
    >
      <path d="M640-40q-17 0-28.5-11.5T600-80q0-17 11.5-28.5T640-120h120v-40H640q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h120v-40H640q-17 0-28.5-11.5T600-320q0-17 11.5-28.5T640-360h120v-40H640q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480h120v-40H640q-17 0-28.5-11.5T600-560q0-17 11.5-28.5T640-600h120v-40H640q-17 0-28.5-11.5T600-680q0-17 11.5-28.5T640-720h160q33 0 56.5 23.5T880-640v520q0 33-23.5 56.5T800-40H640ZM320-360q66 0 113-65t47-155q0-90-47-155t-113-65q-66 0-113 65t-47 155q0 90 47 155t113 65Zm0 320q-48 0-79-35.5T217-159l16-141q-68-33-110.5-108.5T80-580q0-125 70-212.5T320-880q100 0 170 87.5T560-580q0 96-42.5 171.5T407-300l16 141q7 48-24 83.5T320-40Z" />
    </svg>
  ),
  "bebes-y-mamas": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-baby-carriage"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M18 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M2 5h2.5l1.632 4.897a6 6 0 0 0 5.693 4.103h2.675a5.5 5.5 0 0 0 0 -11h-.5v6" />
      <path d="M6 9h14" />
      <path d="M9 17l1 -3" />
      <path d="M16 14l1 3" />
    </svg>
  ),
  ortopedia: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-crutches"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 3m0 2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z" />
      <path d="M11 21h2" />
      <path d="M12 21v-4.092a3 3 0 0 1 .504 -1.664l.992 -1.488a3 3 0 0 0 .504 -1.664v-5.092" />
      <path d="M12 21v-4.092a3 3 0 0 0 -.504 -1.664l-.992 -1.488a3 3 0 0 1 -.504 -1.664v-5.092" />
      <path d="M10 11h4" />
    </svg>
  ),
  "cosmetica-natural": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-leaf text-black hover:text-green-500"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
      <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
    </svg>
  ),
  promociones: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-percentage text-red-600"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M6 18l12 -12" />
    </svg>
  ),
};

export const getCorrectIconCategory = (category: CategoriesSlug): JSX.Element => {
  return icons[category];
};
