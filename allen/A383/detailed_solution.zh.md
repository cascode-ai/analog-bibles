# 详细步骤 - A383

先判断输出是压摆还是遵循线性单极点响应，再由线性阶跃响应求输出走完半个摆幅所需的时间。

### 第 1 步 — 输入过驱动量与分辨率之比

使输出走完整个 1 V 摆幅的最小输入为

$$
V_{in}(\min)=\frac{V_{OH}-V_{OL}}{A_v(0)}=\frac{1\ \mathrm V}{10^4}=0.1\ \mathrm{mV},
\qquad k=\frac{V_{in}}{V_{in}(\min)}=\frac{1\ \mathrm{mV}}{0.1\ \mathrm{mV}}=10 .
$$

### 第 2 步 — 线性响应还是压摆

单极点位于 $\omega_c=10^5$ rad/s（$\tau_c=1/\omega_c=10\ \mu$s），未限幅的线性阶跃响应为

$$
v_{out}(t)=A_v(0)V_{in}\bigl(1-e^{-t/\tau_c}\bigr),
$$

其斜率在 $t=0$ 时最大：

$$
\left.\frac{dv_{out}}{dt}\right|_{\max}=\frac{A_v(0)V_{in}}{\tau_c}=(10^4)(1\ \mathrm{mV})(10^5\ \mathrm{s^{-1}})=1\ \mathrm{V/\mu s}.
$$

它低于 5 V/µs 的压摆率，因此比较器不会压摆，整个过程都适用线性响应。

### 第 3 步 — 传播延迟

输出须移动半个摆幅 0.5 V，而未限幅的最终变化量为 $A_v(0)V_{in}=10$ V，即占比 $1/(2k)=0.05$：

$$
1-e^{-t_p/\tau_c}=\frac1{2k}
\quad\Rightarrow\quad
t_p=\tau_c\ln\frac{2k}{2k-1}=(10\ \mu\mathrm s)\ln\frac{20}{19}=(10\ \mu\mathrm s)(0.05129)=0.513\ \mu\mathrm s .
$$

由于过驱动量是分辨率的十倍，只用到了指数曲线开头近似线性的部分，故 $t_p\approx\tau_c/(2k)=0.5\ \mu$s。若输出受压摆限制，则需 $0.5\ \mathrm V/(5\ \mathrm{V/\mu s})=0.1\ \mu$s，但在此输入下比较器达不到该速率。
