$A_v \approx -1.97$ V/V（忽略 $g_{ds}$ 时为 −2.10），$R_{out} \approx 13.3$ kΩ（14.1 kΩ $= 1/g_{m2}$），$f_{-3\,\mathrm{dB}} \approx 11.6$ MHz（只计 $g_{m2}$ 时为 10.9 MHz）。

- $g_{m1} = \sqrt{2 \cdot 110\ \mu \cdot 2 \cdot 50\ \mu} = 148.3\ \mu$S，$g_{m2} = 70.7\ \mu$S，$g_{ds1} = 2\ \mu$S，$g_{ds2} = 2.5\ \mu$S。
- $A_v = -g_{m1}/(g_{m2} + g_{ds1} + g_{ds2}) = -148.3/75.2 = -1.97$，$R_{out} = 1/75.2\ \mu\mathrm{S} = 13.3$ kΩ。
- 电容：M2 的栅极和漏极都接在输出端，因此 $C_{gd2}$ 被短路，$C_{gs2}$ 接在输出端与 $V_{DD}$（交流地）之间。$C_{out} = C_{bd1} + C_{bd2} + C_{gs2} + C_L = 1025$ fF，$C_M = C_{gd1} = 4$ fF。
- $f_{-3\,\mathrm{dB}} = (g_{m2} + g_{ds1} + g_{ds2})/[2\pi(C_{out} + C_M)] = 75.2\ \mu/(2\pi \cdot 1.029\ \mathrm{pF}) = 11.6$ MHz。右半平面零点（right-half-plane zero）$g_{m1}/C_{gd1}$ 位于 5.9 GHz。
