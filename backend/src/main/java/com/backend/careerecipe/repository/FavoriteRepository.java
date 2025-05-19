import com.backend.careerecipe.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    Optional<Favorite> findByUser_IdAndSubject_Subject_id_Subject_idAndSubject_Subject_id_Department(
            Long userId,
            String subjectId,
            String department
    );
}
