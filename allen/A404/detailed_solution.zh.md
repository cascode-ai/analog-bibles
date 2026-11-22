# 详细步骤 - A404

输入对向输出节点注入正比于 $\Delta V_{in}$ 的电流，交叉耦合负载 M3–M4 则对输出差进行再生。在反对称半电路上列一个 KCL 方程，得到带右半平面极点的一阶方程；对零初始差下的阶跃输入求解，即得时间响应和延迟。

### 第 1 步 — 差模 KCL

由对称性，尾节点为交流地，$v_{o1}=-\Delta V_{out}/2$，$v_{o2}=+\Delta V_{out}/2$，$v_{gs1}=\Delta V_{in}/2$。在 $v_{o1}$ 处，电流经 $C_1$ 流出并流入 M1 漏极（$g_{m1}\Delta V_{in}/2$），栅极接 $v_{o2}$ 的 M3 提供 $-g_{m3}v_{o2}$。忽略输出电导：

$$
sC\,v_{o1}+g_{m1}\frac{\Delta V_{in}}2=-g_{m3}v_{o2}
\quad\Rightarrow\quad
sC\,\Delta V_{out}=g_{m3}\Delta V_{out}+g_{m1}\Delta V_{in},
$$

$$
\Delta V_{out}(s)=\frac{g_{m1}}{sC-g_{m3}}\,\Delta V_{in}(s).
$$

$s=+g_{m3}/C$ 处的极点位于右半平面：交叉耦合对发生再生。

### 第 2 步 — 阶跃响应

对阶跃 $\Delta V_{in}(s)=\Delta V_{in}/s$，且电容初始无电荷，部分分式分解得

$$
\Delta V_{out}(s)=\frac{g_{m1}}{g_{m3}}\Delta V_{in}\left[\frac1{s-g_{m3}/C}-\frac1s\right]
\quad\Rightarrow\quad
\Delta V_{out}(t)=\frac{g_{m1}}{g_{m3}}\Delta V_{in}\left(e^{t/\tau_L}-1\right),\qquad \tau_L=\frac C{g_{m3}} .
$$

$t$ 较小时它退化为 $\Delta V_{out}\approx(g_{m1}\Delta V_{in}/C)\,t$，即输入电流给 $C$ 充电；$t$ 超过 $\tau_L$ 后，指数再生占主导。

### 第 3 步 — 数值

$$
\tau_L=\frac{1\ \mathrm{pF}}{100\ \mu\mathrm S}=10\ \mathrm{ns},\qquad \frac{g_{m1}}{g_{m3}}=\frac{1\ \mathrm{mS}}{100\ \mu\mathrm S}=10 .
$$

### 第 4 步 — 传播延迟

令 $\Delta V_{out}=0.5(V_{OH}-V_{OL})$，$\Delta V_{in}=0.01(V_{OH}-V_{OL})$：

$$
10\,(0.01)(V_{OH}-V_{OL})\left(e^{t_p/\tau_L}-1\right)=0.5(V_{OH}-V_{OL})
\quad\Rightarrow\quad
e^{t_p/\tau_L}=6,
$$
$$
t_p=\tau_L\ln6=(10\ \mathrm{ns})(1.792)=17.9\ \mathrm{ns}.
$$

这里 $-1$ 项不可忽略：输出从零开始，输入必须先建立起不平衡；若去掉 $-1$，将得到 $\tau_L\ln5=16.1$ ns。
