# 详细步骤 - R039

**思路：** 用电流 $I_{in}$ 驱动饱和 MOSFET 小信号模型的栅极，使源极、漏极和衬底保持为交流地，求出漏极电流 $I_{out}$，再求 $|I_{out}/I_{in}| = 1$ 时的频率。

### 第 1 步 — 读小信号测试电路图

用 $I_{in}$ 驱动饱和 MOSFET 的栅极，使源极、漏极和衬底均处于交流地。漏极交流短路令 $V_d=0$。右上方的箭头将 $I_{out}$ 定义为从短路支路流入 D 为正。按源网表的参考方向，这对应 $-I(\mathrm{VD})$。

![简化小信号测试电路，标出栅极和漏极的电流方向](/q/R039/solution-ft-test.zh.svg)

结电容 $C_{SB}$、$C_{DB}$ 和输出电阻 $r_O$ 两端的交流电压均为零。由于 $V_{bs}=0$，体效应电流 $g_{mb}V_{bs}$ 也为零。简化图省去这些支路。在饱和区，沟道屏蔽栅极与衬底之间的耦合，模型也忽略 $C_{GB}$。

### 第 2 步 — 栅极电流平衡

在 G 点，$I_{in}$ 流入，两条电容支路的电流流出。源极和漏极都处于交流地，所以从栅极到两个电容另一端的电压均为 $V_{gs}$。应用电容关系 $I=j\omega C\,\Delta V$，得

$$
I_{in}=j\omega C_{GS}V_{gs}+j\omega C_{GD}V_{gs},
\qquad
V_{gs}=\frac{I_{in}}{j\omega(C_{GS}+C_{GD})}.
$$

### 第 3 步 — 漏极电流平衡

在 D 点，两支蓝色箭头表示流入电流。$C_{GD}$ 支路的参考方向从 G 指向 D。菱形受控源的电流 $g_mV_{gs}$ 从 D 流向接地的源极。

$$
I_{out}+j\omega C_{GD}V_{gs}=g_mV_{gs},
\qquad
I_{out}=(g_m-j\omega C_{GD})V_{gs}.
$$

在第 4 步得到的课本近似单位增益频率处，前馈电流幅值与受控源电流幅值之比为

$$
\frac{\omega_T C_{GD}}{g_m}\approx\frac{C_{GD}}{C_{GS}+C_{GD}}.
$$

当 $C_{GD}\ll C_{GS}$ 时，该比值很小。两项电流的相位还相差 $90^\circ$，因此前馈项对 $|I_{out}|$ 的影响更小。课本近似取 $I_{out}\approx g_mV_{gs}$，而栅极方程仍计入两个电容。第 5 步定量验证这一近似。

### 第 4 步 — 电流增益与单位增益频率（unity-gain frequency）

代入第 2 步求得的 $V_{gs}$：

$$\frac{I_{out}}{I_{in}} = \frac{g_m}{j\omega\,(C_{GS} + C_{GD})}, \qquad \left|\frac{I_{out}}{I_{in}}\right| = \frac{g_m}{\omega\,(C_{GS} + C_{GD})} .$$

在此近似下，增益按 $1/\omega$ 下降（−20 dB/十倍频程），并在下述频率处等于 1：

$$\omega_T = \frac{g_m}{C_{GS} + C_{GD}}, \qquad f_T = \frac{\omega_T}{2\pi} = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})} ,$$

这正是所要证明的结果。

### 第 5 步 — 验证被忽略的前馈项

精确保留 $I_{out} = (g_m - j\omega C_{GD})V_{gs}$：

$$\frac{I_{out}}{I_{in}} = \frac{g_m - j\omega C_{GD}}{j\omega\,(C_{GS} + C_{GD})}, \qquad \left|\frac{I_{out}}{I_{in}}\right|^2 = \frac{g_m^2 + \omega^2C_{GD}^2}{\omega^2\,(C_{GS} + C_{GD})^2} .$$

令其等于 1：

$$
\begin{aligned}
g_m^2 + \omega_T^2C_{GD}^2 &= \omega_T^2\,(C_{GS} + C_{GD})^2\\
g_m^2 &= \omega_T^2\left[(C_{GS} + C_{GD})^2 - C_{GD}^2\right]\\
\omega_T &= \frac{g_m}{\sqrt{(C_{GS} + C_{GD})^2 - C_{GD}^2}} .
\end{aligned}
$$

与第 4 步相比，唯一的变化是根号下的 $C_{GD}^2$ 项。对于典型值 $C_{GD} = 0.2\,C_{GS}$：

$$\frac{C_{GD}^2}{(C_{GS} + C_{GD})^2} = \frac{0.04}{1.44} = 0.028, \qquad \frac{1}{\sqrt{1 - 0.028}} = 1.014,$$

因此精确的 $f_T$ 只比 $g_m/[2\pi(C_{GS} + C_{GD})]$ 高约 1.4 %，忽略前馈电流是完全合理的。

### 结果

当栅极由电流驱动，而源极、漏极和衬底都接交流地时，结电容、$r_O$ 和 $g_{mb}$ 都不流过信号电流，$I_{in}$ 全部用于给 $C_{GS} + C_{GD}$ 充电，且 $I_{out} \approx g_mV_{gs}$：

$$\frac{I_{out}}{I_{in}} = \frac{g_m}{j\omega\,(C_{GS} + C_{GD})} \quad\Longrightarrow\quad f_T = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})} .$$

仅有的近似是饱和区中 $C_{GB} \approx 0$，以及忽略了很小的前馈电流 $j\omega C_{GD}V_{gs}$（第 5 步示例中的影响约为 1.4%）。

**常见错误：** 把 $C_{DB}$ 或 $C_{SB}$ 加到分母中。在 $f_T$ 测试中，每个结电容的两端都处于交流地，因此其中没有信号电流流过；只有在漏极电压会变化的实际电路中，它们才起作用。

**常见错误：** 只用 $C_{GS}$。漏极接交流地时，从栅极看进去 $C_{GD}$ 与 $C_{GS}$ 并联，输入电流必须同时给两者充电。

**常见错误：** 用电压增益来“证明”这一结果，例如用带负载的共源级（common-source stage）的电压增益。$f_T$ 是由漏极接交流地时的电流增益定义的；电压增益取决于负载，得不到这个公式。
