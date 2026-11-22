# 详细步骤 - A375

写出具有两个相等实极点的系统的线性阶跃响应，对其求导，并令二阶导数为零求出斜率最大之处。避免压摆所需的压摆率就是这一最大斜率。

### 第 1 步 — 两个相等极点的阶跃响应

两个极点都位于 $-1/\tau$，$\tau=1/|p|=1/(10^7\ \mathrm{s^{-1}})=100$ ns，传递函数为 $A_v(0)/(1+s\tau)^2$，对阶跃 $V_{in}$ 的响应为

$$
v_{out}(t)=A_v(0)V_{in}\Bigl[1-\Bigl(1+\frac t\tau\Bigr)e^{-t/\tau}\Bigr].
$$

### 第 2 步 — 斜率及其最大值

求导得

$$
\frac{dv_{out}}{dt}=A_v(0)V_{in}\,\frac{t}{\tau^2}\,e^{-t/\tau}.
$$

斜率在 $t=0$ 时为零（两极点响应起始是平的），其最大值位于

$$
\frac{d^2v_{out}}{dt^2}=A_v(0)V_{in}\,\frac1{\tau^2}\Bigl(1-\frac t\tau\Bigr)e^{-t/\tau}=0\quad\Rightarrow\quad t=\tau=100\ \mathrm{ns},
$$

所以

$$
\Bigl(\frac{dv_{out}}{dt}\Bigr)_{\max}=\frac{A_v(0)V_{in}}{e\,\tau}.
$$

### 第 3 步 — 数值

输入为 $V_{in}=10V_{in}(\min)$，所以 $A_v(0)V_{in}=10(V_{OH}-V_{OL})=10$ V：

$$
\Bigl(\frac{dv_{out}}{dt}\Bigr)_{\max}=(10\ \mathrm V)(10^7\ \mathrm{s^{-1}})(0.368)=3.68\times10^7\ \mathrm{V/s}=36.8\ \mathrm{V/\mu s},
$$

出现在阶跃后 100 ns。

### 第 4 步 — 所需压摆率

要无压摆地跟随线性响应，比较器需要

$$
SR\ge36.8\ \mathrm{V/\mu s}.
$$

这一条件在任何情况下都足够。严格地说，线性响应上升 1 V 后输出就停在其 1 V 摆幅处，即 $(1+t/\tau)e^{-t/\tau}=0.9$ 时，$t\approx53$ ns，早于最大斜率时刻；实际达到的最大斜率约为 31 V/µs。
