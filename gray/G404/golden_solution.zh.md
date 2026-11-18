线性区：$g_m = k'(W/L)V_{ds}$（等价地，$g_m = I_D/(V_{ov} - V_{ds}/2)$，其中 $V_{ov} = V_{gs} - V_t$）。在相同电流下，有源区的 $g_m$ 更大。

- 相同 $I_D$ 下的有源区：$g_{m,\text{sat}} = \sqrt{2k'(W/L)I_D}$。
- 在线性区代入 $I_D = k'(W/L)(V_{ov} - V_{ds}/2)V_{ds}$：
  $\dfrac{g_{m,\text{triode}}}{g_{m,\text{sat}}} = \dfrac{k'(W/L)V_{ds}}{\sqrt{2[k'(W/L)]^2(V_{ov} - V_{ds}/2)V_{ds}}} = \sqrt{\dfrac{V_{ds}}{2V_{ov} - V_{ds}}}$。
- 在线性区 $V_{ds} < V_{ov}$，因此 $V_{ds} < 2V_{ov} - V_{ds}$，该比值小于 1。只有在饱和区边缘（$V_{ds} = V_{ov}$）时比值才等于 1，而当 $V_{ds}$ 很小时比值趋于零。因此线性区器件的 $g_m$ 较低，这也是用线性区晶体管进行检测的共模反馈（CMFB）方案环路增益和带宽较低的原因。
