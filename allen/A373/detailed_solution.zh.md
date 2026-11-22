# 详细步骤 - A373

当线性单极点响应要求输出的变化速率超过压摆率时，比较器就会压摆。单极点阶跃响应在起始时最陡，所以把该初始斜率与 SR 比较，求出输入阶跃。

### 第 1 步 — 线性响应的斜率

对阶跃 $V_{in}$，单极点输出为

$$
v_{out}(t)=A_v(0)V_{in}\bigl(1-e^{-\omega_ct}\bigr),\qquad
\frac{dv_{out}}{dt}=A_v(0)V_{in}\,\omega_c\,e^{-\omega_ct},
$$

其最大值在 $t=0$ 处，为 $A_v(0)V_{in}\omega_c$。

### 第 2 步 — 压摆条件

该斜率超过压摆率时输出压摆：

$$
A_v(0)V_{in}\,\omega_c>SR\quad\Rightarrow\quad
V_{in}>\frac{SR}{A_v(0)\,\omega_c}=\frac{10^6\ \mathrm{V/s}}{(10^4)(10^3\ \mathrm{s^{-1}})}=0.1\ \mathrm V .
$$

所以大于约 100 mV 的输入阶跃产生压摆响应；更小的阶跃产生线性的单极点响应。

### 第 3 步 — 用半摆幅判据检验

延迟是在输出摆幅的一半（0.5 V）处定义的。若要求输出变化 0.5 V 时线性斜率仍超过 SR，由于此时 $A_v(0)V_{in}e^{-\omega_ct}=A_v(0)V_{in}-0.5\ \mathrm V$，得

$$
\omega_c\bigl(A_v(0)V_{in}-0.5\ \mathrm V\bigr)>SR\quad\Rightarrow\quad V_{in}>100.05\ \mathrm{mV},
$$

阈值实际上相同。因此 $V_{in}\gtrsim100$ mV。
