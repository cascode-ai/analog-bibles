令 $\varepsilon = \Delta C_x/C_x$，$A = \sum_{i=1}^{3} b_{i-1}2^{3-i}$，$B = \sum_{i=4}^{6} b_{i-1}2^{6-i}$：
$v_{OUT} = V_{REF}\,\frac{(8 + \varepsilon)A + (1 + \varepsilon)B}{64 + 15\varepsilon} = \frac{V_{REF}}{8}\left(1 - \frac{7\varepsilon}{64 + 15\varepsilon}\right)\left[A + \left(1 + \frac{7\varepsilon}{8 + \varepsilon}\right)\frac{B}{8}\right]$，
保留到 $\varepsilon$ 的一阶项，得 $v_{OUT} \approx \frac{V_{REF}}{8}\left(1 - \frac{7\Delta C_x}{64C_x}\right)\left[\sum_{i=1}^{3} b_{i-1}2^{3-i} + \left(1 + \frac{7\Delta C_x}{8C_x}\right)\sum_{i=4}^{6}\frac{b_{i-1}2^{6-i}}{8}\right]$。

推导：
- 电荷守恒（初始已放电），MSB 节点电压为 $v_{OUT}$，LSB 节点电压为 $v_L$，$C_x' = C_x + \Delta C_x$：
  $7C v_{OUT} + C_x'(v_{OUT} - v_L) = C V_{REF} A$，$8C v_L + C_x'(v_L - v_{OUT}) = C V_{REF} B$。
- 解得：$v_{OUT} = V_{REF}\frac{A(8C + C_x') + C_x' B}{56C + 15C_x'}$。代入 $C = 7C_x/8$ 和 $C_x' = C_x(1 + \varepsilon)$ 即得上式；$\varepsilon = 0$ 时回到 $V_{REF}(A/8 + B/64)$。
- 因此 $C_x$ 的误差既改变总增益（因子 $1 - 7\varepsilon/64$），也改变 LSB 部分的相对权重（因子 $1 + 7\varepsilon/8$）。
