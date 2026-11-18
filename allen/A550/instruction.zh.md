假设一个 1 位 ΔΣ 调制器输出端的量化器噪声谱密度为
$|N(f)| = \dfrac{2V_{REF}}{\sqrt{12}}\sqrt{\dfrac{2}{f_s}}\,\sin^2\!\left(\dfrac{\omega}{2f_s}\right)$，其中 $\omega = 2\pi f$，
$f_s$ = 10 MHz 为采样频率。若该 ΔΣ 调制器用于一个 16 位过采样 ADC（oversampled ADC），求最大信号带宽 $f_B$（以赫兹计）。16 位性能是指 0 到 $f_B$ 频带内（理想低通抽取滤波器）的噪声有效值不超过一个满量程为 $V_{REF}$ 的理想 16 位 ADC 的量化噪声有效值，即 $V_{REF}/(2^{16}\sqrt{12})$。
