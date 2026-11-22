# 详细步骤 - A372

分别按线性单极点响应和按压摆率压摆两种情况计算延迟，再比较线性响应的初始斜率与压摆率，判断属于哪种情况；比较器服从两者中较慢的那个。

### 第 1 步 — 相对于分辨率的过驱动

输入分辨率是经直流增益产生满输出摆幅的输入：

$$
V_{in}(\min)=\frac{V_{OH}-V_{OL}}{A_v(0)}=\frac{1\ \mathrm V}{10^4}=0.1\ \mathrm{mV},\qquad
k=\frac{V_{in}}{V_{in}(\min)}=\frac{10\ \mathrm{mV}}{0.1\ \mathrm{mV}}=100 .
$$

### 第 2 步 — 线性单极点估算

极点位于 $\omega_c=10^5$ rad/s（$\tau_c=10\ \mu$s）时，阶跃 $V_{in}$ 给出 $v_{out}(t)=A_v(0)V_{in}(1-e^{-t/\tau_c})$。输出变化半个摆幅 $(V_{OH}-V_{OL})/2=A_v(0)V_{in}(\min)/2$ 的条件为

$$
1-e^{-t_p/\tau_c}=\frac1{2k}\quad\Rightarrow\quad
t_p=\tau_c\ln\frac{2k}{2k-1}=(10\ \mu\mathrm s)\ln\frac{200}{199}=50.1\ \mathrm{ns}.
$$

### 第 3 步 — 检查是否压摆

线性响应在 $t=0$ 时最陡，斜率为

$$
\frac{dv_{out}}{dt}\Big|_{0}=A_v(0)V_{in}\,\omega_c=(10^4)(10\ \mathrm{mV})(10^5\ \mathrm{s^{-1}})=10\ \mathrm{V/\mu s},
$$

是可用压摆率 1 V/µs 的十倍。因此输出不能跟随线性响应，而是进入压摆。

### 第 4 步 — 压摆限制下的延迟

以压摆率使输出变化半个摆幅所需的时间为

$$
t_p=\frac{V_{OH}-V_{OL}}{2\,SR}=\frac{1\ \mathrm V}{2(1\ \mathrm{V/\mu s})}=0.5\ \mu\mathrm s .
$$

压摆限制的值是两者中较大的，它就是传播延迟：$t_p=0.5\ \mu$s（500 ns）。
