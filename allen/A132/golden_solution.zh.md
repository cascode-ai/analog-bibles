$A_v \approx -43.6$ V/V，$f_{-3\,\mathrm{dB}} \approx 283$ kHz。

- 推导：两管都饱和时，输出端的小信号模型为 $g_{m1}v_{in}$ 和 $g_{m2}v_{in}$（两栅极都接 $v_{in}$，两源极都处于交流地）与 $r_{ds1}$、$r_{ds2}$ 并联。由 KCL：$(g_{m1} + g_{m2})v_{in} + (g_{ds1} + g_{ds2})v_{out} = 0$，故 $v_{out}/v_{in} = -(g_{m1} + g_{m2})/(g_{ds1} + g_{ds2})$。代入 $g_{mi} = \sqrt{2K'_i(W_i/L_i)I_D}$ 和 $g_{dsi} = \lambda_i I_D$ 即得所给形式；增益按 $1/\sqrt{I_D}$ 下降。
- 数值计算：$g_{m1} = \sqrt{2 \cdot 110\ \mu \cdot 5 \cdot 200\ \mu} = 469.0\ \mu$S，$g_{m2} = \sqrt{2 \cdot 50\ \mu \cdot 5 \cdot 200\ \mu} = 316.2\ \mu$S，$g_{ds1} + g_{ds2} = 0.09 \cdot 200\ \mu = 18\ \mu$S。$A_v = -785.2/18 = -43.6$。
- 输出电容：$C_{gd1} + C_{gd2} + C_{bd1} + C_{bd2} + C_L = 10.11$ pF。$f_{-3\,\mathrm{dB}} = 18\ \mu/(2\pi \cdot 10.11\ \mathrm{pF}) = 283$ kHz（$R_{out} = 55.6$ kΩ）。右半平面零点（right-half-plane zero）$(g_{m1}+g_{m2})/(C_{gd1}+C_{gd2})$ 位于 12.5 GHz。
