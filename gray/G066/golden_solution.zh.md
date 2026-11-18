$I_{\text{BIAS}} = 1$ mA 时 $r_o^c \approx 65$ kΩ（$\approx r_{o1}\|r_{o2} = r_{o2}/2$），$I_{\text{BIAS}} = 0$ 时 $r_o^c \approx 87$ kΩ（$\approx \tfrac{2}{3} r_{o2}$），其中 $r_{o2} = V_A/I_{C2} = 130$ kΩ。

一般结果（$Q_1$ 的基极为交流地，在集电极施加测试电压 $v_x$，节点 $b_2$ 即 $Q_1$ 的发射极，也是 $Q_2$ 的基极）：
$$\frac{1}{r_o^c} = \frac{1}{r_{o2}} + \frac{r_{\pi1} + r_{\pi2} + g_{m2} r_{\pi1} r_{\pi2}}{r_{o1}\left(r_{\pi1} + r_{\pi2} + g_{m1} r_{\pi1} r_{\pi2}\right) + r_{\pi1} r_{\pi2}} \approx \frac{1}{r_{o2}} + \frac{(\beta_0+1) r_{\pi1} + r_{\pi2}}{r_{o1}\left[r_{\pi1} + (\beta_0+1) r_{\pi2}\right]}.$$
与 $I_{\text{BIAS}}$ 的关系：$I_{C1} = \frac{\beta_0}{\beta_0+1}\left(I_{\text{BIAS}} + I_{C2}/\beta_F\right)$，令 $n = I_{C2}/I_{C1} = r_{\pi1}/r_{\pi2} = r_{o1}/r_{o2}$，则
$$r_o^c \approx r_{o2} \,\Big\|\, r_{o2}\,\frac{n\,(n + \beta_0 + 1)}{(\beta_0+1)\,n + 1}.$$

推导：在 $b_2$ 处列 KCL：$Q_1$ 的发射极电流 $-g_{m1}v_{b2} - v_{b2}/r_{\pi1} + (v_x - v_{b2})/r_{o1}$ 等于 $v_{b2}/r_{\pi2}$，由此求出 $v_{b2}$；于是 $i_x = [-g_{m1}v_{b2} + (v_x - v_{b2})/r_{o1}] + g_{m2}v_{b2} + v_x/r_{o2}$。流过 $r_{o1}$ 的电流到达 $Q_2$ 的基极并被放大，因此 $r_{o1}$ 并不是简单地并联在输出端。

- $I_{\text{BIAS}} = 1$ mA：$I_{C1} \approx 1.0$ mA（$n \approx 1$）：$g_{m1} = g_{m2} = 38.5$ mA/V，$r_{\pi1} = r_{\pi2} = 5.2$ kΩ，$r_{o1} = r_{o2} = 130$ kΩ。第二项约为 $1/r_{o1}$（$g_m$ 项相互抵消），因此 $r_o^c \approx 130\|130 = 65.0$ kΩ。
- $I_{\text{BIAS}} = 0$：$I_{C1} = 4.98\ \mu$A，$r_{\pi1} = 1.045$ MΩ $= (\beta_0+1) r_{\pi2}$，$r_{o1} = 26.1$ MΩ $\approx \beta_0 r_{o2}$；第二条支路为 $\approx 2 r_{o1}/(\beta_0+1) \approx 2 r_{o2}$ = 260 kΩ，因此 $r_o^c \approx 130\|260 = 86.7$ kΩ。（$r_{o1}$ 电流的一半进入 $Q_2$ 的基极并被放大 $\beta_0$ 倍。）
