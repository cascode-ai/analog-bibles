一个 $L$ 阶过采样 ADC 在零到 $f_B$ 信号频带内的噪声功率为
$n_o = \dfrac{\Delta}{\sqrt{12}}\,\dfrac{\pi^L}{\sqrt{2L+1}}\left(\dfrac{2f_B}{f_s}\right)^{L+0.5}$（有效值），
其中 $f_s$ 为采样频率，$\Delta = V_{REF}/(2^B - 1)$，$B$ 为量化器（quantizer）的位数。对于采用 2 位量化器、三阶环路的 16 位过采样 ADC，求最小过采样率（oversampling ratio）$OSR = f_s/2f_B$。16 位性能是指 $n_o$ 不超过一个满量程为 $V_{REF}$ 的理想 16 位 ADC 的量化噪声有效值，即 $V_{REF}/(2^{16}\sqrt{12})$。
