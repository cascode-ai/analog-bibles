(1) $\mathcal{R} \approx 4.0\times10^5$，$v_o/i_i \approx -10.0$ kΩ（−9999.97 Ω），$Z_{in} \approx 9.6$ mΩ，$Z_{out} \approx 8.7$ mΩ。(2) $Z_{out} \approx 39$ mΩ。

- $g_m = 38.46$ mS，$r_\pi = 5.2$ kΩ，$r_o = 50$ kΩ。$Q_1$、$Q_2$ 的集电极节点：$5\text{k}\|50\text{k}\|r_\pi = 2425$ Ω（级增益幅值为 93.3）。
- $\mathcal{R}$（输入开路）：$Q_3$ 驱动 $4545\|(R_F + r_{\pi1}) = 4545\|15.2\text{k} = 3499$ Ω；$v_{be1} = v_o\,r_{\pi1}/(r_{\pi1}+R_F) = 0.342\,v_o$。$\mathcal{R} = 93.3^2\times(38.46\text{m}\cdot3499)\times0.342 = 4.01\times10^5$。
- $A_\infty = -10$ kΩ；$d$：$i_i$ 流入 $r_{\pi1}\|(R_F + 4545) = 3831$ Ω，$v_o = 3831\,i_i\times4545/14{,}545 = 1197\,i_i$ → $d = 1.2$ kΩ（除以 $1+\mathcal R$ 后可以忽略）。$A = -9999.97$ Ω。
- $Z_{in} = 3831/(1+\mathcal{R}) = 9.56$ mΩ；$Z_{out} = 3499/(1+\mathcal{R}) = 8.73$ mΩ。
- (2) 接 1 kΩ 时：输入节点 $r_{\pi1}\|1\text{k} = 839$ Ω，$Q_3$ 的负载 $4545\|10.84\text{k} = 3204$ Ω，$v_{be1}/v_o = 0.0774$；$\mathcal{R} = 93.3^2\times123.2\times0.0774 = 8.29\times10^4$；$Z_{out} = 3204/(1+\mathcal R) = 38.6$ mΩ。
