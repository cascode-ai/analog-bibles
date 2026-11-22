# 详细步骤 - A421

DAC 的输出与其参考电压成正比，因此 $V_{REF}$ 的任何误差都会完整地出现在满量程输出上。为使参考电压不引起转换误差，其噪声和温度漂移都必须在满量程处保持在 $\pm\tfrac12$ LSB 以内。

### 第 1 步 — 允许误差

$$
\mathrm{LSB}=\frac{V_{REF}}{2^{14}}=\frac{1\ \mathrm V}{16384}=61.0\ \mu\mathrm V,\qquad
\tfrac12\,\mathrm{LSB}=30.5\ \mu\mathrm V .
$$

对数字字 $D$ 有 $v_{out}=V_{REF}\cdot D/2^{14}$，参考误差 $\Delta V_{REF}$ 产生的输出误差为 $\Delta V_{REF}\cdot D/2^{14}$，在满量程处最大，基本等于 $\Delta V_{REF}$。因此 $|\Delta V_{REF}|\le30.5\ \mu$V。

### 第 2 步 — 允许噪声

噪声限值取决于噪声有效值与 $\pm\tfrac12$ LSB 误差界之间的关系：

- 把 $\tfrac12$ LSB 视为噪声峰值，并取峰值 $=\sqrt2\times$ 有效值（类正弦噪声）：
$$
V_{n(rms)}\le\frac{30.5\ \mu\mathrm V}{\sqrt2}=21.6\ \mu\mathrm V .
$$
- 要求噪声有效值本身低于 $\tfrac12$ LSB：
$$
V_{n(rms)}\le30.5\ \mu\mathrm V .
$$

因此参考电压噪声必须低于约 22–30 µV 有效值。更严格的判据给出同一数量级：要求低于量化噪声 $\mathrm{LSB}/\sqrt{12}$ 得 17.6 µV；要求高斯噪声的 $3\sigma$ 峰值在 $\tfrac12$ LSB 以内得约 10 µV。

### 第 3 步 — 允许的温度系数

在 0–100 °C 范围内，参考电压最多漂移 $\tfrac12$ LSB，相对值为

$$
\frac{\Delta V_{REF}}{V_{REF}}\le\frac{30.5\ \mu\mathrm V}{1\ \mathrm V}=30.5\ \mathrm{ppm}
$$

（对应 100 °C 的跨度），故

$$
TC_{V_{REF}}\le\frac{30.5\ \mathrm{ppm}}{100\ ^\circ\mathrm C}=0.305\ \mathrm{ppm/^\circ C}.
$$

这远比普通片上参考电压所能达到的（通常为几十 ppm/°C）严格，因此高分辨率转换器需要精密的、常经修调或温度补偿的参考电压。若改为以中间温度为基准（±50 °C 的变化范围），限值放宽到 0.61 ppm/°C。
