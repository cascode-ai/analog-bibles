导线延迟 ≈ 0.74 ps；集总时间常数 $R_SC$ = 18.5 ps，约为前者的 25 倍。导线自身的分布式（distributed）RC 可以忽略；延迟由驱动源决定。

- $R_{wire} = 0.04\ \Omega \times 1000/1 = 40\ \Omega$。
- $C_{wire} = (7\ \mathrm{aF/\mu m^2} \times 1\ \mu\mathrm{m} + 30\ \mathrm{aF/\mu m}) \times 1000\ \mu\mathrm{m} = 37$ fF（7 fF 平板电容 + 30 fF 边缘电容）。
- 分布式线延迟 $T_D = \tfrac12 R_uC_uL^2 = \tfrac12 R_{wire}C_{wire} = 0.74$ ps（分布式 RC 线的 50% 阶跃延迟 ≈ 0.38RC，为 0.56 ps）。
- 集总：$500\ \Omega \times 37\ \mathrm{fF} = 18.5$ ps。按 Elmore 延迟合计：$R_SC + RC/2$ ≈ 19.2 ps。
