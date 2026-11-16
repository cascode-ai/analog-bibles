计入沟道长度调制（channel-length modulation）时：极点位于 ≈ $6.6\times10^8$ rad/s（$f \approx 105$ MHz）和 ≈ $1.29\times10^{10}$ rad/s（$f \approx 2.05$ GHz）；零点位于 $s = +g_{m1}/C_{GD1} \approx +2.59\times10^{11}$ rad/s（≈ 41 GHz，位于右半平面）。低频增益为 $-g_{m1}(r_{O1}\|r_{O2}) \approx -17$。
若像理想电流源负载那样忽略 λ，则输出电阻（output resistance）为无穷大：一个极点位于原点，另一个位于 ≈ $1.27\times10^{10}$ rad/s ≈ 2.0 GHz；零点相同。

推导：
- $g_{m1} = 5.18$ mS；$r_{O1} = 1/(0.1 \times 1\ \mathrm{mA}) = 10\ \mathrm{k\Omega}$，$r_{O2} = 1/(0.2 \times 1\ \mathrm{mA}) = 5\ \mathrm{k\Omega}$，$R_{out} = 3.33\ \mathrm{k\Omega}$。
- $M_1$：$C_{GS1} = 84$ fF，$C_{GD1} = 20$ fF，$C_{DB1} = 42.4$ fF。$M_2$（$W = 162.8\ \mu$m）：$C_{DB2} = 162.8(1.5)(0.94) + 2(164.3)(0.0032) = 230.5$ fF；$C_{GD2} = 162.8(0.3) = 48.8$ fF，接在输出与交流接地的栅极之间；$C_{GS2}$ 位于两个交流地之间，不起作用。
- 输出端对地的总电容：$C_{out} = C_{DB1} + C_{DB2} + C_{GD2} \approx 322$ fF。
- 在共源级传递函数中令 $R_D \to R_{out}$，$C_{DB} \to C_{out}$：分母为 $R_SR_{out}\xi s^2 + [R_S(1 + g_{m1}R_{out})C_{GD1} + R_SC_{GS1} + R_{out}(C_{GD1} + C_{out})]s + 1$，其中 $\xi = C_{GS1}C_{GD1} + C_{GS1}C_{out} + C_{GD1}C_{out} = 3.51\times10^{-26}\ \mathrm{F^2}$：即 $1.17\times10^{-19}s^2 + 1.59\times10^{-9}s + 1$，其根为 $6.6\times10^8$ 和 $1.29\times10^{10}$ rad/s。
- 经 $C_{GD1}$ 的前馈（feedforward）产生零点：$s_z = +g_{m1}/C_{GD1}$。
