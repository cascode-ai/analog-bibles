# 详细步骤 - G279

以运放的受控源 $a_vv_x$（其中 $v_x=v_+-v_-=v_i-v_o$）为参考元件。在 $v_i=0$ 时求回归比，再求渐近增益和馈通，并在两个端口应用布莱克曼公式。栅极不取电流，因此 $R_o$ 中始终没有信号电流，栅极电压等于受控源的值 $a_vv_x$。

### 第 1 步 — 跟随器参数

$g_m=\sqrt{2k'(W/L)I_D}=4.243$ mA/V；$V_{SB}=0$ 时体跨导（body transconductance）为

$$
g_{mb}=\frac{g_m\gamma}{2\sqrt{2|\phi_f|}}=\frac{(4.243\ \mathrm{mA/V})(0.3\ \mathrm{V^{1/2}})}{2\sqrt{0.6\ \mathrm V}}=0.822\ \mathrm{mA/V}.
$$

衬底接地时，跟随器电流为 $g_m(v_g-v_o)-g_{mb}v_o$。输出节点还经 $R_i$ 连到同相输入端。

### 第 2 步 — 回归比

令 $v_i=0$，用测试电压 $v_t$ 代替 $a_vv_x$，故 $v_g=v_t$。在输出节点列 KCL（电流源理想，$r_o=\infty$；$R_i$ 接到接地的同相输入端）：

$$
g_m(v_t-v_o)=g_{mb}v_o+\frac{v_o}{R_i}\quad\Rightarrow\quad v_o=v_t\,\frac{g_m}{g_m+g_{mb}+1/R_i}=0.8376\,v_t .
$$

于是 $v_x=-v_o$，返回值为 $a_vv_x=-a_v(0.8376)v_t$：

$$
\mathcal R=\frac{a_v\,g_m}{g_m+g_{mb}+1/R_i}=837.6 .
$$

### 第 3 步 — 闭环增益

当 $a_v\to\infty$ 时 $v_x\to0$，故 $A_\infty=1$。当 $a_v=0$ 时栅极接地，$v_i$ 只能经 $R_i$ 到达输出端：

$$
d=\frac{1/R_i}{g_m+g_{mb}+1/R_i}=1.97\times10^{-4}.
$$

$$
\frac{v_o}{v_i}=(1)\frac{837.6}{838.6}+\frac{1.97\times10^{-4}}{838.6}=0.9988 .
$$

### 第 4 步 — 输入电阻（布莱克曼公式）

$a_v=0$ 时，$v_i$ 看到 $R_i$ 与跟随器输出电阻串联：$R_{in}(a_v{=}0)=R_i+1/(g_m+g_{mb})=1.0002\ \mathrm{M\Omega}$。

- 输入端口短路（$v_i=0$）：$\mathcal R(\text{short})=837.6$，与第 2 步相同。
- 输入端口开路：$R_i$ 中不可能有电流，同相输入端跟随输出，$v_x=0$，故 $\mathcal R(\text{open})=0$。

$$
R_{in}=1.0002\ \mathrm{M\Omega}\cdot\frac{1+837.6}{1+0}=839\ \mathrm{M\Omega}.
$$

### 第 5 步 — 输出电阻（布莱克曼公式）

$a_v=0$ 时，输出端看到跟随器的 $1/(g_m+g_{mb})$ 与接到接地输入端的 $R_i$ 并联：$R_{out}(a_v{=}0)=197.4\ \Omega$。输出短路使 $v_x=0$，$\mathcal R(\text{short})=0$；输出开路时 $\mathcal R(\text{open})=837.6$：

$$
R_{out}=\frac{197.4\ \Omega}{838.6}=0.235\ \Omega .
$$

这些结果是精确的，并且与二端口方法的结果在四位有效数字内一致，因为唯一的前馈通路（$R_i$）非常弱。
