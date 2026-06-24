const routeNodes = [
  ["blue", 260, 498, 12],
  ["blue", 430, 498, 11],
  ["blue", 610, 498, 11],
  ["blue", 785, 498, 12],
  ["green", 145, 725, 12],
  ["green", 230, 682, 11],
  ["green", 690, 728, 12],
  ["orange", 752, 728, 12],
  ["orange", 806, 667, 12],
  ["purple", 203, 894, 12],
  ["purple", 278, 1048, 12],
  ["purple", 630, 895, 10],
  ["blue", 736, 1096, 12],
  ["gray", 185, 1238, 12],
  ["gray", 260, 1188, 10],
] as const;

export function SubwayRouteLayer() {
  return (
    <svg aria-hidden="true" className="metro-route-layer" viewBox="0 0 1055 1491">
      <g className="metro-route-shadow">
        <path d="M-30 405 H275 C338 405 375 372 375 309 V267 C375 217 409 186 459 186 H517" />
        <path d="M375 405 V468 C375 487 390 498 412 498 H1018 C1040 498 1055 512 1055 534 V624" />
        <path d="M145 764 C145 704 181 682 238 682 H650 C708 682 736 709 736 758 V780" />
        <path d="M736 780 C736 706 772 667 846 667 H1090" />
        <path d="M806 667 C762 667 740 693 740 737 V840 C740 874 760 894 794 894 H940 C976 894 996 872 996 836 V796 C996 762 1014 742 1048 742" />
        <path d="M190 894 H930 C978 894 1002 918 1002 966 V1015 C1002 1063 978 1087 930 1087 H185 C130 1087 104 1061 104 1006 V971 C104 922 132 894 190 894" />
        <path d="M104 1006 C74 1006 53 1027 53 1056 V1140 C53 1170 74 1188 104 1188 H626 C668 1188 690 1210 690 1252 V1312 C690 1360 722 1390 772 1390 H914" />
        <path d="M-20 1238 H148 C174 1238 185 1226 185 1200 V1188 C185 1158 205 1138 235 1138 H645" />
      </g>
      <g>
        <path
          className="metro-line metro-line--blue"
          d="M-30 405 H275 C338 405 375 372 375 309 V267 C375 217 409 186 459 186 H517"
        />
        <path
          className="metro-line metro-line--blue metro-line--delay-1"
          d="M375 405 V468 C375 487 390 498 412 498 H1018 C1040 498 1055 512 1055 534 V624"
        />
        <path
          className="metro-line metro-line--green"
          d="M145 764 C145 704 181 682 238 682 H650 C708 682 736 709 736 758 V780"
        />
        <path
          className="metro-line metro-line--orange"
          d="M736 780 C736 706 772 667 846 667 H1090"
        />
        <path
          className="metro-line metro-line--orange metro-line--delay-1"
          d="M806 667 C762 667 740 693 740 737 V840 C740 874 760 894 794 894 H940 C976 894 996 872 996 836 V796 C996 762 1014 742 1048 742"
        />
        <path
          className="metro-line metro-line--purple"
          d="M190 894 H930 C978 894 1002 918 1002 966 V1015 C1002 1063 978 1087 930 1087 H185 C130 1087 104 1061 104 1006 V971 C104 922 132 894 190 894"
        />
        <path
          className="metro-line metro-line--blue metro-line--delay-2"
          d="M104 1006 C74 1006 53 1027 53 1056 V1140 C53 1170 74 1188 104 1188 H626 C668 1188 690 1210 690 1252 V1312 C690 1360 722 1390 772 1390 H914"
        />
        <path
          className="metro-line metro-line--gray"
          d="M-20 1238 H148 C174 1238 185 1226 185 1200 V1188 C185 1158 205 1138 235 1138 H645"
        />
      </g>
      <g>
        {routeNodes.map(([color, cx, cy, r], index) => (
          <circle
            className={`metro-node metro-node--${color}`}
            cx={cx}
            cy={cy}
            key={`${color}-${index}`}
            r={r}
          />
        ))}
      </g>
    </svg>
  );
}
