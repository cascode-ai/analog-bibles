题设两器件均工作于饱和区。取 $W/L=100$、$I=|I_D|=0.5$ mA，采用一阶平方律关系
$$
I\approx\tfrac12\beta V_{ov}^2,\qquad
g_m\approx\beta V_{ov}=\sqrt{2\beta I},\qquad
r_O\approx\frac1{\lambda I},\qquad
\beta=\mu C_{ox}(W/L).
$$
两器件系数为 $\beta_n=13.4\ \mathrm{mA/V^2}$、$\beta_p=3.84\ \mathrm{mA/V^2}$，代入得
$$
\begin{aligned}
g_{m,n}&=\sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})}=3.66\ \mathrm{mS},\\
g_{m,p}&=\sqrt{2(3.84\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})}=1.96\ \mathrm{mS},\\
r_{O,n}&\approx\frac1{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})}=20\ \mathrm{k\Omega},\\
r_{O,p}&\approx\frac1{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})}=10\ \mathrm{k\Omega}.
\end{aligned}
$$
本征增益为二者的乘积，无量纲：

| 器件 | $g_m$ | $r_O$ | $g_mr_O$ |
|---|---|---|---|
| NMOS | 3.66 mS | 20 kΩ | $3.66\times20=73.2$ |
| PMOS | 1.96 mS | 10 kΩ | $1.96\times10=19.6$ |

这里在偏置电流中忽略 CLM，在 $r_O$ 中保留其一阶效应。题目未给出 $V_{DS}$，无法计算与其有关的修正。NMOS 的本征增益约为 PMOS 的 3.7 倍。
