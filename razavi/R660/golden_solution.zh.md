分频器输出的基波（fundamental）：在 $\omega_0/M$ 处有一个载波，在 $\omega_0/M \pm \omega_m$ 处有两个边带（sideband），每个边带的相对幅度（边带/载波）为 $\dfrac{K_{VCO}V_m}{2M\omega_m}$，这属于窄带调频（narrowband FM）。边带的频率间隔仍为 $\omega_m$，但边带与载波之比比 VCO 输出端小 M 倍（即低 20 log M dB）。
- 情况 $\omega_0/M > \omega_m$：两个边带都位于正频率处，分别在 $\omega_0/M - \omega_m$ 和 $\omega_0/M + \omega_m$，关于载波对称。
- 情况 $\omega_0/M < \omega_m$：下边带落在负频率 $\omega_0/M - \omega_m$ 处，并折叠到 $\omega_m - \omega_0/M$。输出包含 $\omega_0/M$、$\omega_m - \omega_0/M$ 和 $\omega_m + \omega_0/M$ 三个分量。此时两个边带关于 $\omega_m$ 而不是关于载波对称；若 $\omega_m > 2\omega_0/M$，下边带甚至位于载波之上。

推导：
- VCO 的相位：$\phi_{VCO}(t) = \omega_0t + \dfrac{K_{VCO}V_m}{\omega_m}\sin\omega_mt$。VCO 输出 $\cos\phi_{VCO}$ 在 $\omega_0 \pm \omega_m$ 处有边带，相对幅度为 $K_{VCO}V_m/(2\omega_m)$。
- ÷M 电路每 M 个输入周期产生一个输出周期；它把总相位除以 M：$\phi_{div} = \dfrac{\omega_0}{M}t + \beta\sin\omega_mt$，其中 $\beta = \dfrac{K_{VCO}V_m}{M\omega_m}$。载波和频偏（frequency deviation）都被除以 M，而调制速率不变。
- 当 β ≪ 1 时：$A\cos\phi_{div} \approx A\cos\dfrac{\omega_0}{M}t + \dfrac{A\beta}{2}\left[\cos\left(\dfrac{\omega_0}{M} + \omega_m\right)t - \cos\left(\dfrac{\omega_0}{M} - \omega_m\right)t\right]$。
- 在第二种情况下，$\cos[(\omega_0/M - \omega_m)t] = \cos[(\omega_m - \omega_0/M)t]$，因此该分量出现在 $\omega_m - \omega_0/M$ 处。
- 分频器的方波输出还含有奇次谐波 $k\omega_0/M$，每个谐波在 $\pm\omega_m$ 处都有边带，其调制指数（modulation index）为 kβ，恰好抵消了谐波幅度中的 1/k，因此这些边带与基波的边带一样大。当 $\omega_m > \omega_0/M$ 时，这些边带与各次谐波相互交错，其中一些（例如 $|3\omega_0/M - \omega_m|$）可能落在基波附近甚至低于基波。
