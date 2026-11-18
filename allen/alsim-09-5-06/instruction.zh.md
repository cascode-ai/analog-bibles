设计题。设计一个具有轨到轨（rail-to-rail）输入和输出能力的预充电缓冲器。预充电缓冲器的主要任务是在短时间内把 ADC 输入端的采样电容 $C_S$ 充电到接近输入电压。在这一预充电阶段之后，输入端直接与采样电容相连，并通过一个开关完成精细建立，如 [图 1] 所示（带有 $R_S$ 和 $C_F$ 的信号源 $V_S$ 驱动缓冲器；在 PreCharge 阶段，开关 $Q_2$ 将缓冲器输出接到 $C_S$；在 Fine Settling 阶段，开关 $Q_1$ 将输入节点直接接到 $C_S$；ADC 的 Sample 和 Convert 阶段如时序图所示）。

由于采用了这种分相工作方式，输入源需要提供的电荷/电流减小了，因此 ADC 的输入阻抗等效地增大了。电流减小和阻抗增大的程度取决于预充电缓冲器的建立性能，而建立性能与压摆率（slew rate）、增益带宽积（gain-bandwidth product）和增益直接相关。

设计一个放大器 $A(s)$，其建立精度为 2 %，建立时间（settling time）为 100 ns，容性负载为 10 pF，总功耗为 2 mW。为了获得足够的压摆率，你可能需要很大的电流；因此，你可能需要动态改变尾电流，或者采用压摆率不由尾电流决定的输入结构。由建立精度推导出所需的最小开环增益。设计指标如下：

- $C_S$ = 10 pF 时 GBW > 10 MHz
- 建立到 2 % 精度的时间 < 100 ns
- 输入共模范围（input common-mode range）：轨到轨
- 输出摆幅：带容性负载时轨到轨
- 电源：单 5 V
- 功耗：标称 2 mW

对于建立精度和建立时间，将运放接成单位增益结构，负载电容为 10 pF；施加阶跃输入，观察建立时间和精度。

采用 0.5 µm CMOS 工艺：MOSIS 发布的 AMI C5 工艺的 SPICE（BSIM3v3）模型（优先使用 run T51A；任何 C5 run 在按你的仿真器需要做语法修正后均可使用）。手工计算时，该工艺的典型值大致为：NMOS $V_{T} \approx 0.67$ V，$\mu_nC_{ox} \approx 113\ \mu\mathrm{A/V^2}$；PMOS $V_{T} \approx -0.92$ V，$\mu_pC_{ox} \approx 38\ \mu\mathrm{A/V^2}$；$C_{ox} \approx 2.45$ fF/µm²；最小绘制沟道长度 0.6 µm。

设计按如下方式评分，代入的每个数值都取自计算机仿真：
$$\text{SCORE} = 20\min\left[1, \left(\frac{2}{\text{settling accuracy in \%}}\right)^2\right] + 20\min\left[1, \left(\frac{2\ \text{mW}}{\text{power dissipation}}\right)^2\right] + 10\min\left[1, \frac{\text{GBW}}{10\ \text{MHz}}\right] + 20\min\left[1, \frac{\text{ICMR (V)}}{5\ \text{V}}\right] + 10\min\left[1, \frac{\text{output swing (V)}}{5\ \text{V}}\right]$$
你需要提供足以验证你如何得到 SCORE 的支持材料，并附上标注清楚的电路原理图。
