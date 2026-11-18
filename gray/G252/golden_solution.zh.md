$\mathcal{R} \approx 6.17\times10^4$，$v_o/i_i \approx -99.998$ kΩ，$R_{in} \approx 1.35$ Ω，$R_{out} \approx 3.2$ mΩ。

- $\mathcal{R}$：令 $i_i = 0$（开路），用测试电压 $v_t$ 代替 $a_v(\cdot)$，它经 $R_o$ 驱动 $R_L \| (R_F + R_i)$：输出为 $v_t \cdot \frac{14.634}{14.834} = 0.9865 v_t$，而 $v_- = v_o\,R_i/(R_i+R_F) = 0.8333 v_o$。所以 $\mathcal{R} = a_v \times 0.9865 \times 0.8333 = 61{,}657$。
- $A_\infty = -R_F = -100$ kΩ（$a_v \to \infty$ 时反相输入端为虚地，$i_i$ 全部流过 $R_F$）。
- $d$（$a_v = 0$）：$i_i$ 产生 $v_- = i_i[R_i\|(R_F + R_o\|R_L)] = 83.47\text{k}\,i_i$，而 $v_o = v_-\,\frac{R_o\|R_L}{R_F + R_o\|R_L} = 164.4\ \Omega \cdot i_i$；$d = +164$ Ω。
- $A = -100\text{k}\times\frac{61{,}657}{61{,}658} + \frac{164}{61{,}658} = -99{,}998$ Ω。
- $R_{in}$：$R_{in}(a_v{=}0) = R_i\|(R_F + R_o\|R_L) = 83.47$ kΩ；$\mathcal{R}$（输入短路）= 0；$\mathcal{R}$（输入开路）= 61,657；$R_{in} = 83.47\text{k}/61{,}658 = 1.354$ Ω。
- $R_{out}$：$R_{out}(a_v{=}0) = R_o\|R_L\|(R_F+R_i) = 197.3$ Ω；$\mathcal{R}$（输出短路）= 0；$\mathcal{R}$（输出开路，保留 $R_L$）= 61,657；$R_{out} = 3.20$ mΩ。
这些结果与精确的节点分析一致。
