舍入量化器的量化误差 $e = x - Q(x)$ 位于 $[-\Delta/2, +\Delta/2]$ 内。对于变化频繁的信号（跨越许多量化电平，且与量化台阶不相关），$e$ 在该区间内均匀分布，概率密度为 $1/\Delta$，均值为零，因此

$e_{rms}^2 = \frac{1}{\Delta}\int_{-\Delta/2}^{\Delta/2} e^2\,de = \frac{1}{\Delta}\left[\frac{e^3}{3}\right]_{-\Delta/2}^{\Delta/2} = \frac{\Delta^2}{12}$，从而 $e_{rms} = \Delta/\sqrt{12} \approx 0.289\Delta$。

时域推导：对斜坡输入，误差是每个台阶周期 $T$ 重复一次的锯齿波 $e(t) = \Delta(t/T - 1/2)$，而 $\frac{1}{T}\int_0^T \Delta^2(t/T - 1/2)^2\,dt = \Delta^2/12$。

（对于截尾量化器，误差在 $[0, \Delta]$ 上均匀分布，均值为 $\Delta/2$；其交流部分的均方根值仍为 $\Delta/\sqrt{12}$。）
