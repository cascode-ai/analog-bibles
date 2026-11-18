$A_v \approx -48.7$ V/V，$R_{out} = 222$ kΩ，$f_{-3\,\mathrm{dB}} \approx 0.70$ MHz。

- $g_{m1} = 148.3\ \mu$S，$g_{m2} = 70.7\ \mu$S。两管都由 $v_{in}$ 驱动，因此跨导相加：219.0 µS。
- $A_v = -(g_{m1} + g_{m2})/(g_{ds1} + g_{ds2}) = -219.0/4.5 = -48.7$，$R_{out} = 1/4.5\ \mu\mathrm{S} = 222$ kΩ。
- $C_{gd1}$ 和 $C_{gd2}$ 都跨接在输入与输出之间，构成密勒电容（Miller capacitance），$C_M = 8$ fF。$C_{gs2}$ 接在输入端与 $V_{DD}$ 之间，由信号源驱动，因此不构成输出端负载。$C_{total} = C_{gd1} + C_{gd2} + C_{bd1} + C_{bd2} + C_L = 1028$ fF。
- $f_{-3\,\mathrm{dB}} = 4.5\ \mu/(2\pi \cdot 1.028\ \mathrm{pF}) = 0.697$ MHz。右半平面零点（right-half-plane zero）$(g_{m1} + g_{m2})/(C_{gd1} + C_{gd2})$ 位于 4.4 GHz。
