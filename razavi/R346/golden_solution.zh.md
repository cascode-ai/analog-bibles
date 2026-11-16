$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D} + 2kTR_1 + \frac{2kT}{g_m^2R_1},\qquad \overline{I_{n,in}^2} = 4kT\left(\frac{1}{R_D} + \frac{1}{2R_1}\right)$$

- 电压（输入短路）：栅极电压为 $V_{out}/2$ 加上分压器的噪声；输出端的基尔霍夫电流定律（KCL）给出 $V_{out}\left(\dfrac{1}{R_D} + \dfrac{1}{2R_1} + \dfrac{g_m}{2}\right) = g_mV_{in} + I_{n,RD} - I_{n1} - \dfrac{1+g_mR_1}{2}I_{nA} - \dfrac{1-g_mR_1}{2}I_{nB}$（$I_{nA}$、$I_{nB}$ 分别为上、下两个 $R_1$ 的噪声电流）。把噪声除以 $g_m$：两个 $R_1$ 给出 $\dfrac{4kT}{R_1}\cdot\dfrac{(1+g_mR_1)^2 + (1-g_mR_1)^2}{4g_m^2} = 2kTR_1 + \dfrac{2kT}{g_m^2R_1}$。解释：$2kTR_1 = 4kT(R_1\|R_1)$ 是分压器在栅极处的戴维南噪声；第二部分是它作为输出端负载所产生的噪声。
- 电流（输入开路）：$M_1$ 的总电流为零（源极上没有其他元件），因此输出端只看到无源网络 $R_D\|(2R_1)$，其噪声为 $4kT(R_D\|2R_1)$；跨阻（transimpedance）为 $R_D\|2R_1$，得到 $\overline{I_{n,in}^2} = 4kT/(R_D\|2R_1)$。
