# 详细步骤 - A400

锁存器按 $\Delta V_{out}=\Delta V_ie^{t/\tau_L}$ 再生其初始输出差，其中 $\tau_L\approx C/g_m$。节点电容由器件尺寸决定，电流增大时只有 $g_m$ 改变；四个时间随后由所需输出差增益的对数求得。

### 第 1 步 — 再生模型

对节点电容为 $C$、节点电阻为 $R$ 的交叉耦合对：

$$
C\frac{d\Delta V_{out}}{dt}=\Bigl(g_m-\frac1R\Bigr)\Delta V_{out}
\quad\Rightarrow\quad
\Delta V_{out}(t)=\Delta V_i\,e^{t/\tau_L},\qquad \tau_L\approx\frac C{g_m}\ \ (g_mR\gg1),
$$

因此达到目标差值所需时间为 $t=\tau_L\ln(\Delta V_{out}/\Delta V_i)$。

### 第 2 步 — 50 µA 时的时间常数

$$
g_m=\sqrt{2K'_N(W/L)I_D}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=332\ \mu\mathrm S,\qquad
g_mR=\frac{332\ \mu\mathrm S}{(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=166\gg1 .
$$

栅源电容与电流无关：

$$
C\approx\tfrac23WLC_{ox}=\tfrac23(10\ \mu\mathrm m)(1\ \mu\mathrm m)(24.7\times10^{-4}\ \mathrm{F/m^2})=16.5\ \mathrm{fF},\qquad
\tau_L=\frac{16.5\ \mathrm{fF}}{332\ \mu\mathrm S}=0.050\ \mathrm{ns}.
$$

由于 $g_m\propto\sqrt{I_D}$，电流增大五倍使 $\tau_L$ 比 10 µA 时（0.111 ns）缩短 $\sqrt5$ 倍。

### 第 3 步 — 达到满摆幅与半摆幅的时间

记 $x=\Delta V_i/(V_{OH}-V_{OL})$，达到满摆幅的时间为 $\tau_L\ln(1/x)$，传播延迟为 $t_p=\tau_L\ln(0.5/x)$：

| $\Delta V_i$ | 到 $\Delta V_{out}=V_{OH}-V_{OL}$ | $t_p$（到 $0.5(V_{OH}-V_{OL})$） |
|---|---|---|
| $0.01(V_{OH}-V_{OL})$ | $\tau_L\ln100=4.61\tau_L=0.23$ ns | $\tau_L\ln50=3.91\tau_L=0.19$ ns |
| $0.1(V_{OH}-V_{OL})$ | $\tau_L\ln10=2.30\tau_L=0.11$ ns | $\tau_L\ln5=1.61\tau_L=0.080$ ns |

满摆幅时间是由小信号指数关系得到的估计：输出差接近满摆幅时，一只器件退出饱和，增长变慢，因此到达最终电平的实际时间稍长。半摆幅的传播延迟处在模型适用良好的范围内。
