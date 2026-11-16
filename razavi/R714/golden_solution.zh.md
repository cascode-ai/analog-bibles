导线延迟 ≈ 0.44 ps；集总时间常数 $R_SC$ = 22 ps，约为前者的 50 倍。驱动源起主导作用。

- $R_{wire} = 0.04 \times 1000/2 = 20\ \Omega$。
- $C_{wire} = (7 \times 2 + 30)\ \mathrm{aF/\mu m} \times 1000\ \mu\mathrm{m} = 44$ fF（14 fF 平板电容 + 30 fF 边缘电容）。
- $T_D = \tfrac12 R_{wire}C_{wire} = 0.44$ ps（按 0.38RC 计为 0.33 ps）。
- 集总：$500 \times 44\ \mathrm{fF} = 22$ ps；Elmore 总延迟 ≈ 22.4 ps。
- 与 1 μm 宽的导线（0.74 ps，18.5 ps）相比：加宽会降低导线自身的延迟，但由于边缘电容项不会减小，电容增大了 19%。因此在 500 Ω 驱动源下，总延迟反而变长。
