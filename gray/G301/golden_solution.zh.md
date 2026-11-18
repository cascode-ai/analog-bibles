$C \approx 76$ nF（渐近线设计；精确 60° 时 ≈ 67 nF），开环增益在 ≈ 270 kHz 处为 0 dB。

- 60° PM：500 kHz 和 10 MHz 极点在单位增益频率处可共贡献 30°：$\arctan(f_u/500\text{k}) + \arctan(f_u/10\text{M}) = 30°$ → $f_u = 271$ kHz。
- 主极点（dominant pole）：$a_0 |p_1| = \omega_u$ → $|p_1|/2\pi = 271\text{ kHz}/2.51 \times 10^5 = 1.08$ Hz。
- 该极点由 1.95 MΩ 节点决定：$C = 1/(2\pi \times 1.08\text{ Hz} \times 1.95\text{ MΩ}) = 76$ nF（该节点原有的 ≈ 2.7 pF 可以忽略）。
- 要求 $|a| = 1$ 恰好出现在 271 kHz 处（其他极点使 $|a|$ 缩小 1.14 倍），得 $|p_1|/2\pi = 1.23$ Hz，$C = 67$ nF。（取 76 nF 时，真实的 0 dB 频率 ≈ 245 kHz，PM ≈ 63°。）
- 与密勒补偿（Miller compensation；≈ 6 pF，≈ 5.8 MHz）相比，并联电容大四个数量级，带宽约低 20 倍，因为 500 kHz 极点没有被分裂开。
