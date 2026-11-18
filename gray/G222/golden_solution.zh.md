$v_o/i_i = r_{o1}\|r_{o2} \approx 0.71$ MΩ；$T_0 \approx 0.21\ \mu$s → $f_{-3\text{dB}} \approx 0.76$ MHz。

- 偏置：$(2.5 - V_{GS3})/30\ \mathrm{k\Omega} = \tfrac{60\ \mu}{2}\tfrac{100}{0.6}(V_{GS3} - 1)^2$ → $V_{GS3} = 1.097$ V，所有晶体管中 $I_D = 46.8\ \mu$A。
- $g_{m2} = g_{m3} = \sqrt{2(60\ \mu)(166.7)(46.8\ \mu)} = 0.967$ mA/V；$g_{m1} = \sqrt{2(20\ \mu)(333.3)(46.8\ \mu)} = 0.790$ mA/V，因此所加电阻为 $1/g_{m1} = 1.27\ \mathrm{k\Omega}$。$r_{o1} = 50/I_D = 1.07$ MΩ，$r_{o2} = 100/I_D = 2.14$ MΩ，$R_{\text{out}} = 0.713$ MΩ。
- 跨阻：$i_i$ 流过 $1/g_{m1}$，因此 $v_{sg1} = i_i/g_{m1}$，$i_{d1} = i_i$（单位电流增益）：$v_o/i_i = R_{\text{out}} = 0.713$ MΩ。
- 电容：$C_{gs1} = 84$ fF，$C_{gd1} = 28$ fF，$C_{gs2} = C_{gs3} = 42$ fF，$C_{gd2} = 14$ fF；$C_{db1}$（PMOS，2.5 V）= 106 fF，$C_{db2}$（2.5 V）= 106 fF，$C_{db3}$（1.1 V）= 143 fF；源–衬底电容均被短路。
- 时间常数：$C_{gd1}$：$R + R_{\text{out}} + g_{m1}R_{\text{out}}R$，其中 $R = 1/g_{m1}$ → 1.43 MΩ → 39.9 ns；$C_{db1}$ 和 $C_{db2}$：$R_{\text{out}}$ → 各 75.2 ns；$C_{gd2}$：≈ 1.40 MΩ → 19.6 ns；$C_{gs1}$：1.27 kΩ → 0.11 ns；镜像节点（≈ 1 kΩ）上的 $C_{gs2}$、$C_{gs3}$、$C_{db3}$ → 0.23 ns。
- $T_0 = 210$ ns → $f_{-3\text{dB}} = 0.76$ MHz（精确值：0.76 MHz）。
