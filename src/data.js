const rawData = [
  {
    id: 1,
    title: '1st floor',
    cams: [
      {
        id: 1,
        title: 'Cam 1 - Parking',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 2,
        title: 'Cam 2 - Entrance',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 3,
        title: 'Cam 3 - Lobby',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 4,
        title: 'Cam 4 - Security',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 5,
        title: 'Cam 5 - Parking',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 6,
        title: 'Cam 6 - Warehouse',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 7,
        title: 'Cam 7 - Cleaning room',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 8,
        title: 'Cam 8 - Janitor room',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 9,
        title: 'Cam 9 - Lobby',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 10,
        title: 'Cam 10 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 11,
        title: 'Cam 11 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 12,
        title: 'Cam 12 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 13,
        title: 'Cam 13 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 14,
        title: 'Cam 14 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 15,
        title: 'Cam 15 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 16,
        title: 'Cam 16 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 17,
        title: 'Cam 17 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 18,
        title: 'Cam 18 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 19,
        title: 'Cam 19 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 20,
        title: 'Cam 20 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 21,
        title: 'Cam 21 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 22,
        title: 'Cam 22 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 23,
        title: 'Cam 23 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 24,
        title: 'Cam 24 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
    ],
  },
  {
    id: 2,
    title: '2nd floor',
    cams: [
      {
        id: 25,
        title: 'Cam 25 - Kitchen',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 26,
        title: 'Cam 26 - Conference room',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 27,
        title: 'Cam 27 - Management room',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 28,
        title: 'Cam 28 - Secretary',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 29,
        title: 'Cam 29 - Finance Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 30,
        title: 'Cam 30 - Finance Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 31,
        title: 'Cam 31 - Finance Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 32,
        title: 'Cam 32 - Finance Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 33,
        title: 'Cam 33 - Toilet',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 34,
        title: 'Cam 34 - Elevator',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 35,
        title: 'Cam 35 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 36,
        title: 'Cam 36 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 37,
        title: 'Cam 37 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 38,
        title: 'Cam 38 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 39,
        title: 'Cam 39 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 40,
        title: 'Cam 40 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 41,
        title: 'Cam 41 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 42,
        title: 'Cam 42 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 43,
        title: 'Cam 43 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 44,
        title: 'Cam 44 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 45,
        title: 'Cam 45 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 46,
        title: 'Cam 46 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 47,
        title: 'Cam 47 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 48,
        title: 'Cam 48 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
    ],
  },
  {
    id: 3,
    title: '3rd floor',
    cams: [
      {
        id: 49,
        title: 'Cam 49 - Marketing Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 50,
        title: 'Cam 50 - Marketing Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 51,
        title: 'Cam 51 - Commercial Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 52,
        title: 'Cam 52 - Commercial Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 53,
        title: 'Cam 53 - Commercial Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 54,
        title: 'Cam 54 - Commercial Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 55,
        title: 'Cam 55 - Commercial Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 56,
        title: 'Cam 56 - Legal Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 57,
        title: 'Cam 57 - Logistics Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 58,
        title: 'Cam 58 - Logistics Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 59,
        title: 'Cam 59 - Logistics Dept',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 60,
        title: 'Cam 60 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 61,
        title: 'Cam 61 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 62,
        title: 'Cam 62 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 63,
        title: 'Cam 63 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 64,
        title: 'Cam 64 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 65,
        title: 'Cam 65 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 66,
        title: 'Cam 66 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 67,
        title: 'Cam 67 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 68,
        title: 'Cam 68 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 69,
        title: 'Cam 69 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 70,
        title: 'Cam 70 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 71,
        title: 'Cam 71 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
      {
        id: 72,
        title: 'Cam 72 - ',
        url: '<iframe id="UstreamIframe" src="https://video.ibm.com/embed/1524?html5ui&autoplay=1" width="640" height="480" allowfullscreen webkitallowfullscreen></iframe>',
      },
    ],
  },
];

export default rawData;
