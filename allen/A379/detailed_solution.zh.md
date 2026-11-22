# 详细步骤 - A379

阶跃之前，输出由 M7 保持为低。输入降到 1 V 时，M6 强导通，提供的电流远大于 M7 能吸收的电流，差值给 10 pF 负载充电。延迟就是这一净电流把输出抬到 $V_{DD}/2=2$ V 所需的时间；之后 M6 进入线性区，波形变圆，并稳定在两电流相等之处。

### 第 1 步 — 初始状态

$v_{in}=V_{DD}=4$ V 已保持很久时，$V_{SG6}=0$，M6 截止。M7 的 $V_{GS7}=1$ V，把输出向下拉，直到其电流为零，所以

$$
v_{out}(0^-)=0\ \mathrm V .
$$

### 第 2 步 — 阶跃后的电流

$v_{in}=1$ V 时 $V_{SG6}=3$ V，M6 的过驱动电压为 2.3 V。只要 $V_{SD6}\ge2.3$ V，即 $v_{out}<1.7$ V，M6 就处于饱和区：

$$
i_6=\frac{K'_P}2\Bigl(\frac WL\Bigr)_6(V_{SG6}-|V_{TP}|)^2=\frac{(50\ \mu\mathrm{A/V^2})(10)}2(2.3\ \mathrm V)^2=1.32\ \mathrm{mA}.
$$

M7 的过驱动电压为 0.3 V，最多吸收

$$
i_7=\frac{K'_N}2\Bigl(\frac WL\Bigr)_7(V_{GS7}-V_{TN})^2=\frac{(110\ \mu\mathrm{A/V^2})(100)}2(0.3\ \mathrm V)^2=0.495\ \mathrm{mA},
$$

在 $v_{out}<0.3$ V 时它处于线性区，电流更小。

### 第 3 步 — 到 $V_{DD}/2$ 的延迟

净充电电流约为 $1.32-0.50=0.83$ mA，所以输出几乎线性地上升，速率为

$$
\frac{dv_{out}}{dt}=\frac{i_6-i_7}{C_L}\approx\frac{0.83\ \mathrm{mA}}{10\ \mathrm{pF}}=83\ \mathrm{V/\mu s},
$$

跨过 2 V 所需的时间为

$$
t_d\approx\frac{C_L\,\Delta V}{i_6-i_7}=\frac{(10\ \mathrm{pF})(2\ \mathrm V)}{0.83\ \mathrm{mA}}\approx24\ \mathrm{ns}.
$$

计入两管线性区对 $C_L\,dv_{out}/dt=i_6-i_7$ 做数值积分，得 23.7 ns；若计入沟道长度调制，会缩短到约 20 ns。

### 第 4 步 — 响应形状与最终电平

1.7 V 以上 M6 进入线性区，电流减小，斜坡变圆，转为指数趋近（时间常数约为 $C_L$ 除以 M6 的线性区电导，约 10 ns）。输出稳定在 $V_{OH}$，此时 M6 的线性区电流等于 495 µA：

$$
\beta_6\Bigl[(2.3\ \mathrm V)V_{SD6}-\frac{V_{SD6}^2}2\Bigr]=495\ \mu\mathrm A\ \Rightarrow\ V_{SD6}=0.48\ \mathrm V,\qquad V_{OH}\approx3.52\ \mathrm V .
$$

![输入在 t = 0 从 4 V 跳到 1 V 后，输出从 0 V 近似线性上升，约 24 ns 时跨过 2 V，最终稳定在 3.52 V](/q/A379/solution-waveform.zh.svg)

输出在阶跃前保持 0 V，随后以约 83 V/µs 上升，阶跃后约 24 ns 跨过逻辑阈值 $V_{DD}/2$，最终稳定在约 3.5 V。
