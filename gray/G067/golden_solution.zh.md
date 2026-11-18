$R_i = r_{\pi1} \approx 20.8$ kΩ；$G_m \approx g_{m1} = 9.6$ mA/V；$R_o \approx 100.5$ MΩ（$\approx \beta_0 r_{o2} = 104$ MΩ）；$A_v = -G_m R_o \approx -9.7\times10^5$（$\approx -\beta_0 V_A/V_T = -1.0\times10^6$）。

- 两个晶体管均为 $g_m = 250\ \mu/26\ \mathrm{m} = 9.62$ mA/V，$r_\pi = 200/g_m = 20.8$ kΩ，$r_o = 130/250\ \mu = 520$ kΩ。
- $R_i = r_{\pi1}$（$Q_1$ 的基极）。
- $G_m$：$Q_1$ 的集电极电流流入 $Q_2$ 的低阻抗发射极，并以 $\approx \alpha_0$ 的电流增益传递出去，因此 $G_m \approx g_{m1}$（更精确地为 $g_{m1}\alpha_0 r_{o1}/(r_{o1} + r_{e2}) \approx 9.57$ mA/V）。
- $R_o = r_{o2}\left[1 + \dfrac{g_{m2} r_{o1}}{1 + g_{m2} r_{o1}/\beta_0}\right] = 520\ \mathrm{k}\,[1 + 5000/26] = 100.5$ MΩ（$Q_1$ 的 $r_{o1}$ 对 $Q_2$ 起发射极负反馈作用；由于 $g_{m2}r_{o1} \gg \beta_0$，结果趋近于 $\beta_0 r_{o2}$）。
- $A_v = -G_m R_o = -9.62\ \mathrm{mA/V} \times 100.5\ \mathrm{M\Omega} \approx -9.7\times10^5$；取 $R_o \approx \beta_0 r_{o2}$，则 $A_v \approx -g_{m1}\beta_0 r_{o2} = -\beta_0/\eta$，$\eta = V_T/V_A = 2\times10^{-4}$。
