假设一个二阶 1 位 ΔΣ 调制器的调制噪声谱密度为
$|N(f)| = \dfrac{4\Delta}{\sqrt{12}}\sqrt{\dfrac{2}{f_s}}\,\sin^2\!\left(\dfrac{\omega\tau}{2}\right)$
其中 $\Delta$ 为 1 位量化器（quantizer）输出的信号电平，$\omega = 2\pi f$，$f_s = 1/\tau$ 为采样频率，等于 10 MHz。若该调制器用于一个 18 位过采样 ADC（oversampled ADC），求信号带宽 $f_B$（以赫兹计）。假设 18 位性能是指 0 到 $f_B$ 频带内（理想低通抽取滤波器）的噪声有效值不超过一个满量程范围为 $\Delta$ 的理想 18 位量化器的量化噪声有效值，即 $\Delta/(2^{18}\sqrt{12})$。说明你所用的其他假设。
