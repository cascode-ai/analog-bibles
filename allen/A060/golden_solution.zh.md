$\dfrac{v_{out}(s)}{v_{in}(s)} = \dfrac{1}{1 + s/\omega_p}$：具有单位直流增益的单极点低通，$\omega_p = 1/(R_{on1}C) \approx 1.2\times10^{10}$ rad/s（≈ 2.0 GHz），其中 $R_{on1}$ ≈ 1.84 kΩ，$C$ ≈ 44 fF。（若只计 M2 的栅氧电容 39.5 fF：$\omega_p$ ≈ 1.38×10¹⁰ rad/s，即 2.19 GHz。）

- 直流：M2 的栅极不取电流，因此 M1 中没有直流电流：$V_{out} = V_{in}$ = 2 V，$V_{DS1}$ = 0。M1（栅极接 5 V）是工作在非饱和区的导通开关，即一个电阻；M2（栅极为 2 V；源极、漏极和衬底接地）是一个 MOS 电容。
- M1：$V_{GS1}$ = 3 V，$V_{SB1}$ = 2 V → $V_{T1} = 0.7 + 0.4(\sqrt{2.7} - \sqrt{0.7})$ = 1.023 V；$r_{ds1} = 1/[K'(W/L)(V_{GS1} - V_{T1} - V_{DS1})] = 1/(110\ \mu\mathrm{A/V^2}\times2.5\times1.977\ \mathrm{V})$ = 1.84 kΩ。
- M2：$V_{GS2}$ = 2 V > $V_T$ 且 $V_{DS2}$ = 0，因此沟道已形成（非饱和区），整个栅电容都接到地：$C = C_{ox}WL + 2\,\mathrm{CGSO}\cdot W + \mathrm{CGBO}\cdot L$ = 39.5 + 1.76 + 2.8 = 44.1 fF。
- $\omega_p = 1/(1.84\ \mathrm{k\Omega}\times44.1\ \mathrm{fF})$ = 1.23×10¹⁰ rad/s：$v_{out}/v_{in} = 1/(1 + s/1.23\times10^{10})$。（M1 自身的栅-漏电容 ≈ 2.4 fF，接到其栅极这一交流地，会使 $\omega_p$ 降低约 5%。）
