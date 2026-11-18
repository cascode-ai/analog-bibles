对于这个长沟道器件，$\mathcal{E}_cL = 15$ V ≫ 过驱动电压，因此速度饱和对曲线的影响很小（有源区电流变化 −3% 到 −13%）。

- 不计速度饱和（平方律）：线性区 $I_D = \tfrac{k'}{2}\tfrac{W}{L}(2V_{ov}V_{DS} - V_{DS}^2)$，当 $V_{DS} \ge V_{ov}$ 时保持平坦，$I_D = \tfrac{k'}{2}\tfrac{W}{L}V_{ov}^2$：0.155、1.90、5.59 mA，分别在 $V_{DS}$ = 0.4、1.4、2.4 V 处达到（$\tfrac{k'}{2}\tfrac{W}{L} = 0.97$ mA/V²）。
- 计入速度饱和：线性区 $I_D = \dfrac{\tfrac{k'}{2}\tfrac{W}{L}(2V_{ov}V_{DS} - V_{DS}^2)}{1 + V_{DS}/(\mathcal{E}_cL)}$；电流在 $V_{DS(act)} = \mathcal{E}_cL\left(\sqrt{1+2V_{ov}/(\mathcal{E}_cL)}-1\right)$ = 0.395、1.34、2.23 V 处停止上升，此后保持为 $I_D = \tfrac{k'}{2}\tfrac{W}{L}V_{DS(act)}^2$ = 0.151、1.74、4.84 mA（分别为平方律值的 0.97、0.92、0.87）。
- 线性区示例（$V_{GS}$ = 3 V）：$V_{DS}$ = 1 V 时为 3.46 mA 对比 3.69 mA；2 V 时为 4.79 对比 5.43 mA。
- 两组曲线几乎重合；差别随过驱动电压和 $V_{DS}$ 的增大而增大（$V_{GS}$ = 3 V 时最大）。
