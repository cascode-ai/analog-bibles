# 详细步骤 - G063

漏极电流固定为 200 µA，因此过驱动电压（overdrive voltage）固定；体效应只使 $V_t$ 升高，而阈值经 $V_{SB}=V_O$ 依赖于未知的输出电压。先解这一个非线性方程求出偏置点，再在跟随器增益中计入 $g_{mb}$。

### 第 1 步 — 由固定电流求过驱动电压

$R\to\infty$ 时 200 µA 全部流过晶体管。在饱和区 $I_D=\tfrac12\mu_nC_{ox}(W/L)(V_{GS}-V_t)^2$，因此

$$
V_{GS}-V_t=\sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}}=\sqrt{\frac{2(200\ \mu\mathrm A)}{(90\ \mu\mathrm{A/V^2})(10)}}=0.6667\ \mathrm V ,
$$

与体效应无关。

### 第 2 步 — 计入体效应的偏置方程

衬底接地，源极电位为 $V_O$，故 $V_{SB}=V_O$。栅极为 3 V，

$$
V_O=3\ \mathrm V-0.6667\ \mathrm V-V_t,\qquad
V_t=V_{t0}+\gamma\left(\sqrt{2\phi_f+V_O}-\sqrt{2\phi_f}\right).
$$

代入 $w=\sqrt{2\phi_f+V_O}=\sqrt{0.61\ \mathrm V+V_O}$，即 $V_O=w^2-0.61$（电压均以 V 为单位，$\sqrt{0.61}=0.78102$）：

$$
\begin{aligned}
w^2-0.61&=2.3333-0.7-0.19w+0.19(0.78102)\\
w^2+0.19w-2.39173&=0 .
\end{aligned}
$$

取正根：

$$
w=\frac{-0.19+\sqrt{0.19^2+4(2.39173)}}{2}=1.45444\ \mathrm{V^{1/2}},
\qquad V_O=w^2-0.61=1.505\ \mathrm V .
$$

于是 $V_t=0.7+0.19(1.45444-0.78102)=0.828$ V；体效应使阈值升高 0.128 V，$V_O$ 由 1.633 V 降到 1.505 V。验算：$V_{DS}=5-1.505=3.5$ V $>0.667$ V，器件处于饱和区。

### 第 3 步 — 小信号参数

$$
g_m=\sqrt{2\mu_nC_{ox}\frac WL I_D}=\sqrt{2(90\ \mu\mathrm{A/V^2})(10)(200\ \mu\mathrm A)}=0.600\ \mathrm{mA/V}.
$$

体跨导（body transconductance）由 $V_t$ 对 $V_{SB}$ 求导得到：

$$
\chi=\frac{g_{mb}}{g_m}=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=\frac{0.19\ \mathrm{V^{1/2}}}{2(1.45444\ \mathrm{V^{1/2}})}=0.0653,
\qquad g_{mb}=\chi g_m=39.2\ \mu\mathrm{A/V}.
$$

### 第 4 步 — 计入体效应的跟随器增益

栅极由 $v_i$ 驱动，衬底接地，源极为 $v_o$，故 $v_{gs}=v_i-v_o$，$v_{bs}=-v_o$。$R\to\infty$、电流源理想且 $\lambda=0$ 时，源极节点没有小信号电流流出，因此漏极电流的变化必须为零：

$$
g_m(v_i-v_o)-g_{mb}v_o=0
\quad\Rightarrow\quad
\frac{v_o}{v_i}=\frac{g_m}{g_m+g_{mb}}=\frac1{1+\chi}=\frac1{1.0653}=0.939 .
$$

体效应使源极不能完全跟随栅极：$v_o$ 上升时 $V_t$ 随之升高，$v_{gs}$ 必须增大才能保持电流不变。答案为 $V_O=1.50$ V（$V_t=0.83$ V），$v_o/v_i=0.94$。
