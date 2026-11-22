# 详细步骤 - A326

用小信号模型代替电流放大器和跟随器，在三个节点——电流放大器输入端 N、其输出端 O（M12 的栅极）和输出端——列 KCL 并求解。第二个 $R_1$ 构成从输出回到 N 的环路，所以每个结果都必须计入这一反馈。由于 $C_o$ 是唯一的电容，电路只有一个极点，由 $C_o$ 看到的电阻决定。

### 第 1 步 — 小信号模型

饱和区中 $g_m=\sqrt{2K'(W/L)I_D}$：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(200)(1\ \mathrm{mA})}=6.63\ \mathrm{mS},\qquad
g_{m12}=\sqrt{2(110\ \mu\mathrm{A/V^2})(20)(100\ \mu\mathrm A)}=663\ \mu\mathrm S .
$$

- 电流放大器在 N 与地之间呈现输入电阻 $r_i=R_3+1/g_{m1}=300\ \Omega+151\ \Omega=451\ \Omega$（类似二极管的 M1 给出 $1/g_{m1}$；栅极接在 N 的 M3 不增加电阻）。
- 其输入电流 $i=v_N/r_i$ 以增益 $A_o=0.1$ 复制，并从节点 O 吸出；$R_2$ 连接 N 与 O，$C_o$ 接在 O 上。
- 跟随器 M12 向输出节点送出 $g_{m12}(v_O-v_{out})$（忽略体效应和 $r_{ds}$）。

### 第 2 步 — 节点方程

$v_{in}$ 接第一个 $R_1$，第二个 $R_1$ 从输出接到 N，并允许测试电流 $i_t$ 流入输出节点：

$$
\begin{aligned}
\text{N:}\quad&\frac{v_{in}-v_N}{R_1}+\frac{v_{out}-v_N}{R_1}+\frac{v_O-v_N}{R_2}=\frac{v_N}{r_i},\\
\text{O:}\quad&\frac{v_N-v_O}{R_2}=\frac{A_o}{r_i}v_N+sC_ov_O,\\
\text{out:}\quad&g_{m12}(v_O-v_{out})+i_t=\frac{v_{out}-v_N}{R_1}.
\end{aligned}
$$

直流时由 O 的方程得 $v_O=v_N(1-A_oR_2/r_i)=v_N\bigl(1-0.1\cdot352\ \mathrm{k\Omega}/451\ \Omega\bigr)=-77.1\,v_N$：电流放大器与 $R_2$ 一起把 N 处电压反相放大。

### 第 3 步 — 直流增益与输入电阻（$i_t=0$）

把 $v_O=-77.1\,v_N$ 代入输出方程：

$$
v_{out}=\frac{g_{m12}v_O+v_N/R_1}{g_{m12}+1/R_1}
=\frac{(-77.1)(0.663\ \mathrm{mS})+1\ \mathrm{mS}}{1.663\ \mathrm{mS}}\,v_N=-30.2\,v_N .
$$

代入 N 的方程，每条支路贡献其电导乘以相应的电压比：

$$
\frac{v_{in}}{R_1}=v_N\Bigl[\frac1{R_1}+\frac{1+30.2}{R_1}+\frac{1+77.1}{R_2}+\frac1{r_i}\Bigr]
=v_N\,(1+31.2+0.22+2.22)\ \mathrm{mS}=v_N\,(34.6\ \mathrm{mS}),
$$

于是 $v_N/v_{in}=0.0289$，直流增益为

$$
\frac{v_{out}}{v_{in}}=(-30.2)(0.0289)=-0.872\ \mathrm{V/V}.
$$

反馈使 N 成为低阻节点：不计输入端的 $R_1$，其电导为 $33.6$ mS，即约 30 Ω。因此输入电阻为

$$
R_{in}=\frac{v_{in}}{(v_{in}-v_N)/R_1}=\frac{R_1}{1-0.0289}=1.03\ \mathrm{k\Omega}.
$$

### 第 4 步 — 输出电阻（$v_{in}=0$）

用 $i_t$ 驱动输出端，在直流下求解同一组方程。$v_{in}=0$ 时第一个 $R_1$ 接地，解为

$$
v_N=0.225\,v_{out},\qquad v_O=-77.1\,v_N=-17.4\,v_{out}.
$$

再由输出方程得

$$
i_t=g_{m12}(v_{out}-v_O)+\frac{v_{out}-v_N}{R_1}
=v_{out}\Bigl[(0.663\ \mathrm{mS})(18.4)+\frac{0.775}{1\ \mathrm{k\Omega}}\Bigr]=v_{out}\,(12.96\ \mathrm{mS}),
$$
$$
R_{out}=\frac{v_{out}}{i_t}=77\ \Omega .
$$

若没有环路，输出端只看到 $1/g_{m12}=1.5\ \mathrm{k\Omega}$；经第二个 $R_1$ 与电流放大器的反馈使它降低约 20 倍。

### 第 5 步 — −3 dB 频率

只有一个电容时，极点为 $p=-1/(R_OC_o)$，其中 $R_O$ 是 $v_{in}=0$ 时 $C_o$ 看到的电阻。在节点 O 加测试电压 $v_O$。由输出节点得 $v_{out}=0.399\,v_O+0.601\,v_N$，再由 N 的方程得 $v_N=0.111\,v_O$。流入 O 的测试电流为

$$
\frac{v_O-v_N}{R_2}+\frac{A_o}{r_i}v_N=v_O\Bigl[\frac{0.889}{352\ \mathrm{k\Omega}}+\frac{0.1(0.111)}{451\ \Omega}\Bigr]=v_O\,(27.1\ \mu\mathrm S),
$$

所以 $R_O=36.8\ \mathrm{k\Omega}$，约为 $R_2/9.6$。于是

$$
|p|=\frac1{R_OC_o}=\frac1{(36.8\ \mathrm{k\Omega})(105\ \mathrm{fF})}=2.58\times10^8\ \mathrm{rad/s},\qquad
f_{-3\,dB}\approx\frac{2.58\times10^8}{2\pi}=41\ \mathrm{MHz}.
$$

若没有第二个 $R_1$，极点为开环值 $(1+A_o)/(R_2C_o)=29.8\times10^6$ rad/s（4.7 MHz）；环路把它展宽约 8.7 倍。

带 $s$ 求解完整方程得

$$
\frac{v_{out}}{v_{in}}=-0.872\,\frac{1-s/1.36\times10^9}{1+s/2.58\times10^8}.
$$

216 MHz 处的右半平面零点（right-half-plane zero）来自从 $v_{in}$ 经两个 $R_1$ 直接到达跟随器有限输出电阻的通路。它比极点高约五倍，只使精确的半功率频率略有上移，为 42.7 MHz；一阶近似下 −3 dB 频率即主极点值 41 MHz。

| 物理量 | 数值 |
|---|---|
| $R_{in}$ | 1.03 kΩ |
| $R_{out}$ | 77 Ω |
| $f_{-3\,dB}$ | ≈ 41 MHz（极点 $2.58\times10^8$ rad/s） |
| 直流增益 | −0.872 V/V |
