$\dfrac{\Phi_{out}}{V_{ex}}(s) = \dfrac{K_{VCO}(1 + s/\omega_{LPF})}{s^2/\omega_{LPF} + s + K_{PD}K_{VCO}} = \dfrac{K_{VCO}(s + \omega_{LPF})}{s^2 + \omega_{LPF}s + \omega_{LPF}K_{PD}K_{VCO}}$。

推导（线性模型，Φin = 0，鉴相器输出为 $K_{PD}(\Phi_{in} - \Phi_{out})$）：
- $V_{cont} = V_{ex} - \dfrac{K_{PD}}{1 + s/\omega_{LPF}}\Phi_{out}$，且 $\Phi_{out} = \dfrac{K_{VCO}}{s}V_{cont}$。
- 因此 $\Phi_{out}\left[1 + \dfrac{K_{PD}K_{VCO}}{s(1 + s/\omega_{LPF})}\right] = \dfrac{K_{VCO}}{s}V_{ex}$，由此即得上述结果。

性质：
- 极点就是 I 型 PLL 的闭环极点（$\omega_n^2 = \omega_{LPF}K_{PD}K_{VCO}$，$2\zeta\omega_n = \omega_{LPF}$），此外在 $-\omega_{LPF}$ 处有一个零点。
- 低频极限为 $1/K_{PD}$：$V_{ex}$ 上的阶跃 ΔV 会使输出相位永久偏移 $\Delta V/K_{PD}$。LPF 的输出变化 −ΔV，以恢复 $\omega_{out} = \omega_{in}$，这需要相位误差变化 $\Delta V/K_{PD}$。
- 高频极限为 $K_{VCO}/s$：$V_{ex}$ 的快速变化对 VCO 的调制就像环路断开时一样。
- 从频率的角度看，$\Omega_{out}/V_{ex} = s\Phi_{out}/V_{ex}$ 是高通的（在直流处有零点），因此 $V_{ex}$ 的缓慢变化不能改变锁定后的输出频率。
