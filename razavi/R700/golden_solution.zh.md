计入体效应（body effect）时 $r_{max} \approx 6.1$ mΩ；若忽略体效应，则 ≈ 7.5 mΩ。

- 标称电流：$I = \tfrac12(134\ \mu\mathrm{A/V^2})(40)(0.5\ \mathrm{V})^2 = 0.67$ mA，跨导（transconductance）$g_m = \mu_nC_{ox}(W/L)(V_b - V_{TH}) = 2.68$ mS。
- 地线的第 $k$ 段（位于节点 $k-1$ 与节点 $k$ 之间，节点 0 即地）流过的电流为 $(N-k+1)I$，因此 $M_k$ 的源极电压为 $V_k = rI[k(N+1) - k(k+1)/2]$。由此得到 $V_1 = NIr$（最小）和 $V_N = \tfrac{N(N+1)}{2}Ir$（最大）。
- 源极电压升高 $V$ 会使电流减小 $(g_m + g_{mb})V$，因为 $V_{GS}$ 下降而 $V_{TH}$ 升高。这里 $g_{mb} = \eta g_m$，其中 $\eta = \gamma/(2\sqrt{2|\phi_F|}) = 0.237$，因此 $g_m + g_{mb} = 3.32$ mS。
- 最大失配出现在 $I_1$ 与 $I_N$ 之间：$\dfrac{I_1 - I_N}{I} = (g_m + g_{mb})\,r\left[\dfrac{N(N+1)}{2} - N\right] = (g_m+g_{mb})\,r\,\dfrac{N(N-1)}{2} = 496\,(g_m+g_{mb})\,r$。
- 令其等于 0.01：$r \le 0.01/(496 \times 3.32\ \mathrm{mS}) = 6.1$ mΩ。若不计体效应，$r \le 0.01/(496 \times 2.68\ \mathrm{mS}) = 7.5$ mΩ。
- 验算：$V_N \approx 2.1$ mV，因此小信号（等电流）近似成立。对该梯形网络进行完整的非线性求解，在此 $r$ 下得到的失配为 0.99%。
