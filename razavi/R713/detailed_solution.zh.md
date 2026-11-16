# 详细步骤 - R713

**思路。** 计算导线的总电阻和总电容（平板电容加边缘电容），把导线的延迟按分布式 RC 线计算，$T_D = \tfrac12 R_{wire}C_{wire}$（Elmore 延迟），再与 500 Ω 驱动源决定的集总时间常数 $R_SC_{wire}$ 进行比较。

### 第 1 步 — 导线的电阻和电容

导线共有 $L/W = 1000\ \mu\mathrm{m}/1\ \mu\mathrm{m} = 1000$ 个方块：

$$R_{wire} = R_\square\frac{L}{W} = (0.04\ \Omega/\square)(1000) = 40\ \Omega .$$

单位长度的平板电容为 $c_{pp} = (7.0\ \mathrm{aF/\mu m^2})(1\ \mu\mathrm{m}) = 7.0\ \mathrm{aF/\mu m}$，边缘电容（两侧）为 $c_{fr} = 30\ \mathrm{aF/\mu m}$：

$$c = c_{pp} + c_{fr} = 37\ \mathrm{aF/\mu m}, \qquad C_{wire} = cL = (37\ \mathrm{aF/\mu m})(1000\ \mu\mathrm{m}) = 37{,}000\ \mathrm{aF} = 37\ \mathrm{fF}.$$

对于这根窄导线，边缘电容分量（30 fF）超过了平板电容部分（7 fF）。

### 第 2 步 — 导线自身的延迟（分布式 RC 线）

导线的电阻和电容沿其长度均匀分布，单位长度的电阻和电容分别为 $r = R_{wire}/L$ 和 $c = C_{wire}/L$。

<!-- diagram: diagram-01.cir -->

Elmore 延迟是把每个电容乘以它与信号源之间的电阻后求和；距离为 $x$ 处的电容元 $c\,dx$ 经电阻 $r\,x$ 充电：

$$T_D = \int_0^L (r\,x)(c\,dx) = rc\int_0^L x\,dx = \frac{rcL^2}{2} = \frac12(rL)(cL) = \frac12R_{wire}C_{wire} .$$

平均来说，电容是经过导线电阻的一半充电的。**数值计算：**

$$T_D = \tfrac12(40\ \Omega)(37\times10^{-15}\ \mathrm{F}) = \tfrac12(1.48\times10^{-12}\ \mathrm{s}) = 0.74\ \mathrm{ps}.$$

（分布式线精确的 50 % 阶跃延迟约为 $0.38R_{wire}C_{wire} = 0.56$ ps；无论哪种定义，都远小于 1 ps。）

### 第 3 步 — 由驱动源决定的集总时间常数

由源电阻对整个导线电容充电（忽略导线电阻）：

$$\tau_{lumped} = R_SC_{wire} = (500\ \Omega)(37\times10^{-15}\ \mathrm{F}) = 18.5\times10^{-12}\ \mathrm{s} = 18.5\ \mathrm{ps}.$$

### 第 4 步 — 比较

$$\frac{R_SC_{wire}}{T_D} = \frac{18.5\ \mathrm{ps}}{0.74\ \mathrm{ps}} = 25 ,$$

原因很简单：导线电阻远小于驱动源电阻，$R_SC/(\tfrac12RC) = 2R_S/R_{wire} = 2(500)/40 = 25$。

**合并的（Elmore）延迟。** $R_S$ 位于每个电容的上游，因此它与总电容相乘，导线再加上其分布项：

$$T_{total} = R_SC_{wire} + \tfrac12R_{wire}C_{wire} = 18.5 + 0.74 = 19.2\ \mathrm{ps}.$$

导线自身的 RC 只占总延迟的约 4 %：对于这根 1 mm 的金属 4 线，延迟由驱动源对导线电容充电决定。（对于长得多的连线，由于 $T_D \propto L^2$，或者对于电阻更大的层，导线电阻才会变得重要。）

### 结果

- 导线：$R_{wire} = 40\ \Omega$，$C_{wire} = 7\ \mathrm{fF} + 30\ \mathrm{fF} = 37$ fF。
- 分布式导线延迟：$T_D = \tfrac12R_{wire}C_{wire} \approx 0.74$ ps（按阶跃响应的 50 % 点约为 0.56 ps）。
- 集总时间常数：$R_SC_{wire} = 500\ \Omega\times37\ \mathrm{fF} = 18.5$ ps，约**大 25 倍**。

导线自身的分布式延迟可以忽略；延迟主要由 500 Ω 的源驱动导线电容决定（总计 ≈ 19.2 ps）。

**常见错误。** 忽略边缘电容。若只计 7 fF 的平板电容部分，两个延迟都会小五倍以上（0.14 ps 和 3.5 ps）。

**常见错误。** 把方块数弄反（用 $W/L = 10^{-3}$ 代替 $L/W = 1000$）。又长又窄的导线有**很多**个方块。

**常见错误。** 在分布式线公式中使用源电阻，或声称导线的延迟与 $R_SC$ 相当。分布项只涉及导线自身的 40 Ω，远小于 $R_S$。
