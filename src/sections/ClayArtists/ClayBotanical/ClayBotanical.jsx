import "./ClayBotanical.css";

export default function ClayBotanical() {
  return (
    <div className="clay-botanical" aria-hidden="true">
      {/* =====================================
          MAIN STEM — DESKTOP
      ====================================== */}

      <svg
        className="
          clay-botanical__stem-svg
          clay-botanical__stem-svg--desktop
        "
        viewBox="0 0 1000 3000"
        preserveAspectRatio="none"
      >
        <path
          className="clay-botanical__stem"
          pathLength="1"
          d="
            M 790 -40

            C 770 130,
              810 250,
              735 390

            C 660 530,
              540 545,
              505 690

            C 470 835,
              555 930,
              650 1010

            C 755 1100,
              770 1230,
              700 1340

            C 620 1465,
              500 1500,
              470 1640

            C 440 1780,
              520 1870,
              625 1940

            C 735 2015,
              790 2110,
              775 2220

            C 760 2320,
              700 2390,
              720 2480

            C 740 2580,
              790 2670,
              735 2770

            C 700 2840,
              680 2920,
              720 3040
          "
        />
      </svg>

      {/* =====================================
          MAIN STEM — MOBILE / TABLET
      ====================================== */}

      <svg
        className="
          clay-botanical__stem-svg
          clay-botanical__stem-svg--mobile
        "
        viewBox="0 0 1000 5000"
        preserveAspectRatio="none"
      >
        <path
          className="clay-botanical__stem"
          pathLength="1"
          d="
            M 900 -50

            C 910 250,
              850 450,
              890 750

            C 920 1050,
              850 1250,
              885 1550

            C 915 1850,
              845 2050,
              875 2350

            C 905 2650,
              840 2850,
              870 3150

            C 900 3450,
              835 3650,
              865 3950

            C 895 4250,
              835 4500,
              850 5050
          "
        />
      </svg>

      {/* =====================================
          BRANCHES
      ====================================== */}

      <BotanicalBranch number={1} side="left" />
      <BotanicalBranch number={2} side="right" />

      <BotanicalBranch number={3} side="left" />
      <BotanicalBranch number={4} side="right" />

      <BotanicalBranch number={5} side="left" />
      <BotanicalBranch number={6} side="right" />

      <BotanicalBranch number={7} side="left" />
      <BotanicalBranch number={8} side="right" />

      {/* =====================================
          EXTRA LEAVES
      ====================================== */}

      <BotanicalLeaf number={1} branch={1} side="left" />
      <BotanicalLeaf number={2} branch={1} side="right" />

      <BotanicalLeaf number={3} branch={2} side="right" />

      <BotanicalLeaf number={4} branch={3} side="left" />
      <BotanicalLeaf number={5} branch={3} side="right" />

      <BotanicalLeaf number={6} branch={4} side="right" />

      <BotanicalLeaf number={7} branch={5} side="left" />
      <BotanicalLeaf number={8} branch={5} side="right" />

      <BotanicalLeaf number={9} branch={6} side="right" />

      <BotanicalLeaf number={10} branch={7} side="left" />

      <BotanicalLeaf number={11} branch={7} side="right" />

      <BotanicalLeaf number={12} branch={8} side="right" />

      {/* =====================================
          FLOWERS
      ====================================== */}

      <Flower number={1} branch={1} />

      <Flower number={2} branch={4} />

      <Flower number={3} branch={6} />

      <Flower number={4} branch={8} />

      {/* =====================================
          SPROUTS
      ====================================== */}

      <Sprout number={1} branch={2} />

      <Sprout number={2} branch={5} />

      <Sprout number={3} branch={7} />

      {/* =====================================
          FLOATING PETALS
      ====================================== */}

      <span
        className="
          clay-botanical__petal
          clay-botanical__petal--1
        "
      />

      <span
        className="
          clay-botanical__petal
          clay-botanical__petal--2
        "
      />

      <span
        className="
          clay-botanical__petal
          clay-botanical__petal--3
        "
      />
    </div>
  );
}

/* =====================================
   BRANCH
====================================== */

function BotanicalBranch({ number, side }) {
  return (
    <svg
      className={`
        clay-botanical__branch-svg
        clay-botanical__branch-svg--${number}
        clay-botanical__branch-svg--${side}
      `}
      viewBox="0 0 180 120"
      preserveAspectRatio="none"
    >
      <path
        className={`
          clay-botanical__branch
          clay-botanical__branch--${number}
        `}
        pathLength="1"
        d={
          side === "left"
            ? `
              M 175 108
              C 140 90,
                110 65,
                75 45
              C 50 30,
                30 20,
                6 12
            `
            : `
              M 5 108
              C 40 90,
                70 65,
                105 45
              C 130 30,
                150 20,
                174 12
            `
        }
      />
    </svg>
  );
}

/* =====================================
   LEAF
====================================== */

function BotanicalLeaf({ number, branch, side }) {
  return (
    <span
      className={`
        clay-botanical__leaf
        clay-botanical__leaf--${number}
        clay-botanical__leaf--branch-${branch}
        clay-botanical__leaf--${side}
      `}
    />
  );
}

/* =====================================
   FLOWER
====================================== */

function Flower({ number, branch }) {
  return (
    <span
      className={`
        clay-botanical__flower
        clay-botanical__flower--${number}
        clay-botanical__flower--branch-${branch}
      `}
    >
      <i />
      <i />
      <i />
      <i />
      <i />
      <b />
    </span>
  );
}

/* =====================================
   SPROUT
====================================== */

function Sprout({ number, branch }) {
  return (
    <span
      className={`
        clay-botanical__sprout
        clay-botanical__sprout--${number}
        clay-botanical__sprout--branch-${branch}
      `}
    >
      <i />
      <i />
    </span>
  );
}
