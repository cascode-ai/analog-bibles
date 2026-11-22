# 详细步骤 - A157

ICMR 是所有晶体管都保持饱和的 $v_{IC}$ 区间。先确定偏置电流，再求 M1（上端）和尾电流管 M5（下端）到达饱和边界时的输入电平。

### 第 1 步 — 电流与栅源电压

所有 $W/L=100$，p 沟道电流镜 M9–M6/M7/M8 和 n 沟道电流镜 M10–M5 都复制 100 µA 基准电流，因此 $I_5=I_6=I_7=I_8=I_{10}=100\ \mu$A。平衡时 $I_1=I_2=50\ \mu$A。在 M1 漏极节点由基尔霍夫电流定律（KCL）得 $I_3=I_6-I_1=50\ \mu$A，M4 镜像该电流。

由 $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$：

$$
\begin{aligned}
V_{GS1}=V_{GS3}&=V_{TN}+\sqrt{\frac{2I_1}{K'_N(W/L)}}=0.7+\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(100)}}=0.795\ \mathrm V,\\
V_{DS5}(\mathrm{sat})&=\sqrt{\frac{2I_5}{K'_N(W/L)}}=\sqrt{\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(100)}}=0.135\ \mathrm V.
\end{aligned}
$$

### 第 2 步 — 上限

二极管连接的 M3 把 M1 的漏极固定在 $V_{D1}=V_{GS3}=0.795$ V，与 $v_{IC}$ 无关。只要 $V_{D1}\ge V_{G1}-V_{TN}=v_{IC}-V_{TN}$，M1 就处于饱和，因此

$$
v_{IC}(\max)=V_{GS3}+V_{TN}=0.795+0.7=1.495\ \mathrm V .
$$

p 沟道电流源 M6 不构成限制：$V_{SD6}=1.5-0.795=0.705$ V，远大于其 $|V_{ov6}|=\sqrt{2(100\ \mu\mathrm A)/[(50\ \mu\mathrm{A/V^2})(100)]}=0.200$ V。

### 第 3 步 — 下限与范围

M1、M2 的源极位于 $v_{IC}-V_{GS1}$，即 M5 的漏极。只要该电压不低于 $V_{DS5}(\mathrm{sat})$，M5 就保持饱和：

$$
v_{IC}(\min)=V_{DS5}(\mathrm{sat})+V_{GS1}=0.135+0.795=0.930\ \mathrm V .
$$

因此

$$
\mathrm{ICMR}=v_{IC}(\max)-v_{IC}(\min)=1.495-0.930=0.565\ \mathrm V\approx0.57\ \mathrm V ,
$$

范围为 $0.93$ V 至 $1.50$ V。
